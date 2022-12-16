from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Question, db, Answer, User
from app.forms import QuestionForm, AnswerForm



questions_routes = Blueprint("questions", __name__)
ask_question_route = Blueprint("ask", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@questions_routes.route("", methods=["GET"])
def get_all_questions():
    questions = Question.query.all()
    return { question.id: question.to_dict() for question in questions }

@questions_routes.route("/<int:id>", methods=["GET"])
def get_one_question(id):
  question = Question.query.get(id)
  answers_data = {}
  for answers in question.question_answer:
    answers_data[answers.id] = answers.to_dict()
  return ({ question.id: question.to_dict()}, answers_data)

# @questions_routes.route("/<int:id>", methods=["GET"])
# def getanswers(id):
#   answers_data = {}
#   for answers in question.question_answer:
#     answers_data[answers.id] = answers.to_dict()
#   return answers_data

@questions_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_question(id):

  question = Question.query.get(id)

  form = QuestionForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    new_title = form.data['title']
    new_question = form.data['question']
    new_tried_expected = form.data['tried_expected']
    new_tags = form.data['tags']

    question.title = new_title
    question.question= new_question
    question.tried_expected= new_tried_expected
    question.tags= new_tags

    db.session.commit()

  return question.to_dict()


@ask_question_route.route("", methods=["POST"])
@login_required
def add_question():

  """
  Presents a form to create a question
  """

  form = QuestionForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    question = Question(
      user_id = current_user.id,
      title = form.data['title'],
      question = form.data['question'],
      tried_expected = form.data['tried_expected'],
      tags = form.data['tags']
    )

    db.session.add(question)
    db.session.commit()
    return question.to_dict()


  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@questions_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_question(id):
  question = Question.query.get(id)
  db.session.delete(question)
  db.session.commit()
  return {"message": 'Delete Successful'}

@ask_question_route.route("/<int:id>/answers", methods=["GET","POST"])
@login_required
def add_answer_to_question(id):
  """
  Presents a form to create a question
  """

  form = AnswerForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    answer = Answer(
      question_id = id,
      user_id = current_user.id,
      body = form.data['body']
    )
    db.session.add(answer)
    db.session.commit()
    return answer.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@questions_routes.route("/<int:id>/like", methods=["GET"])
@login_required
def addlike(id):

  user = User.query.get(current_user.id)

  question = Question.query.get(id)

  # print("!!!!!!!!!!!", question.question_likes)
  # for x in question.question_likes:
  #   print(x.id)
  #   if x.id == current_user.id:
  #     question.question_likes.remove(user)
  #     db.session.commit()
  #     return question.to_dict()


  question.question_likes.append(user)
  db.session.commit()
  # print("@@@@@@@@@@@@@@", question)
  return question.to_dict()

@questions_routes.route("/<int:id>/unlike", methods=["GET"])
@login_required
def unlike(id):

  user = User.query.get(current_user.id)

  question = Question.query.get(id)

  # print("!!!!!!!!!!!", question.question_likes)
  for x in question.question_likes:
    # print(x.id)
    if x.id == current_user.id:
      question.question_likes.remove(user)
      db.session.commit()
      return question.to_dict()

# @questions_routes.route("/<int:id>/upvote", methods=["GET"])
# @login_required
# def addupvote(id):

#   user = User.query.get(current_user.id)

#   answer = Answer.query.get(id)
#   print("!!!!!! THHIS IS ANSWER", answer)

#   answer.answer_upvote.append(user)
#   db.session.commit()
#   # print("@@@@@@@@@@@@@@", question)
#   return answer.to_dict()

from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Answer, db, User
from app.forms import AnswerForm

answers_routes = Blueprint("answers", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# @answers_routes.route("/", methods=["GET"])
# def get_all_answers():
#   pass
    # answers = Answer.query.all(request.questionId)
    # print("THIS IS ANSWERS FROM BACKEND", answers)
    # return { answer.id: answer.to_dict() for answer in answers }


@answers_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_answer(id):

  answer = Answer.query.get(id)

  form = AnswerForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    print("this is form data", form.data)
    new_body = form.data['body']


    answer.body = new_body
    print("before commit", form.data)

    db.session.commit()
    print("after commit", answer.body)


  return answer.to_dict()


@answers_routes.route("", methods=["POST"])
@login_required
def add_answer():

  """
  Presents a form to create a question
  """

  form = AnswerForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    answer = Answer(
      question_id = request.question_id,
      user_id = current_user.id,
      body = form.data['body'],

    )

    db.session.add(answer)
    db.session.commit()
    return answer.to_dict()


  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@answers_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_question(id):
  answer = Answer.query.get(id)
  db.session.delete(answer)
  db.session.commit()
  return {'message': 'Delete Successful'}


@answers_routes.route("/<int:id>/upvote", methods=["GET"])
@login_required
def addupvote(id):
  user = User.query.get(current_user.id)

  answer = Answer.query.get(id)

  for x in answer.answer_downvote:
    if user.id == x.id:
      answer.answer_downvote.remove(user)
      answer.answer_upvote.append(user)
      db.session.commit()
      return answer.to_dict()


  answer.answer_upvote.append(user)
  db.session.commit()
  return answer.to_dict()



@answers_routes.route("/<int:id>/downvote", methods=["GET"])
@login_required
def adddownvote(id):
  user = User.query.get(current_user.id)

  answer = Answer.query.get(id)

  for x in answer.answer_upvote:
    if user.id == x.id:
      answer.answer_downvote.append(user)
      db.session.commit()
      return answer.to_dict()


  answer.answer_downvote.append(user)
  db.session.commit()
  return answer.to_dict()

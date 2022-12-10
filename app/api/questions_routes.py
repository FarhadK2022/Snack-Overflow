from flask import Blueprint, jsonify, session, request
flask_login import current_user
from app.models import Question, db

questions_routes = Blueprint("questions", __name__)

@questions_routes.route("/")
def get_all_questions():
    questions = Question.query.all()
    return { question.id: question.to_dict() for question in questions }

@questions_routes.route("/<int:id>", methods=["GET"])
def get_one_question(id):
  question = Question.query.get(id)
  return { question.id: question.to_dict()}


@questions_routes.route("/", methods=["POST"])
def add_question():
  form = QuestionForm()

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

  if form.errors:
    return form.errors

  return

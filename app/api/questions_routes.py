from flask import Blueprint, jsonify, session, request
from app.models import Question, db

questions_routes = Blueprint("questions", __name__)

@questions_routes.route("/")
def get_all_questions():
    questions = Question.query.all()
    return { question.id: question.to_dict() for question in questions }

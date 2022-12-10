from flask import Blueprint, jsonify, session, request
from app.forms import QuestionForm
from app.models import db, Question
from flask_login import current_user, login_required

question_routes = Blueprint('questions', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@question_routes.route("", methods=['POST'])
@login_required
def postquestion():
    """
    Presents a form to create a question
    """

    form = QuestionForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        question = Question(
            user_id=current_user.id,
            title=form.data['title'],
            question=form.data['question'],
            tried_expected=form.data['tried_expected'],
            tags=form.data['tags']
        )
        print(question)
        db.session.add(question)
        db.session.commit()

        return question.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



# app.register_blueprint(question_routes, url_prefix='/api/ask')
# from .new_question_form import QuestionForm

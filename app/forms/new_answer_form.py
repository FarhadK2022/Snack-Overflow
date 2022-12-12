from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError


class AnswerForm(FlaskForm):
    body = TextAreaField("Answer")

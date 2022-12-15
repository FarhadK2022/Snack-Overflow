from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Question


class QuestionForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    question = TextAreaField("Question", validators=[DataRequired()])
    tried_expected = TextAreaField("Tried_Expected", validators=[DataRequired()])
    tags = StringField("Tags")






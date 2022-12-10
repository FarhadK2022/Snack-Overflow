from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
import datetime


class Answer(db.Model):
    __tablename__ = 'answers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('questions.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    answer_user_relationship = db.relationship("User", back_populates="answer_relationship")
    answer_question_relationship = db.relationship("Question")
    answer_upvote_relationship = db.relationship("Upvote")
    answer_downvote_relationship = db.relationship("Downvote")


    def to_dict(self):
        return {
            'id': self.id,
            'question_id': self.question_id,
            'user_id': self.user_id,
            'body': self.body
        }

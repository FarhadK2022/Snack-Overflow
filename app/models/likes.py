from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .answer import Answer


class Like(db.Model):
    __tablename__ = "likes"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)

    like_user_relationship = db.relationship("User", overlaps="like_relationship")
    like_question_relationship = db.relationship("Question", back_populates="question_like_relationship")

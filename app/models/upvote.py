from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .answer import Answer


class Upvote(db.Model):
    __tablename__ = "upvotes"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey('answers.id'), nullable=False)

    user_relationship = db.relationship("User")
    answer_relationship = db.relationship("Answer", back_populates="upvote_relationship")

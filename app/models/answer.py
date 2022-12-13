from .db import db, SCHEMA, environment, add_prefix_for_prod
import datetime

upvotes = db.Table(
    "upvotes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("answer_id", db.Integer, db.ForeignKey(add_prefix_for_prod("answers.id")))
)

if environment == "production":
    upvotes.schema = SCHEMA

downvotes = db.Table(
    "downvotes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("answer_id", db.Integer, db.ForeignKey(add_prefix_for_prod("answers.id")))
)

if environment == "production":
    downvotes.schema = SCHEMA

class Answer(db.Model):
    __tablename__ = "answers"

    if environment == "production":
        __table_args__ = { "schema": SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("questions.id")))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    answer_user = db.relationship("User", back_populates="user_answer")
    answer_question = db.relationship("Question", back_populates="question_answer")
    answer_upvote = db.relationship("User", secondary=upvotes, back_populates="user_upvote", cascade="all, delete")
    answer_downvote = db.relationship("User", secondary=downvotes, back_populates="user_downvote", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "question_id": self.question_id,
            "user_id": self.user_id,
            "body": self.body,
            "votes": len(self.answer_upvote) - len(self.answer_downvote)
        }

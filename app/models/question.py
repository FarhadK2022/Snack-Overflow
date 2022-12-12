from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("question_id", db.Integer, db.ForeignKey(add_prefix_for_prod("questions.id")))
)

if environment == "production":
    likes.schema = SCHEMA

class Question(db.Model):
    __tablename__ = "questions"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(150), nullable=False)
    question = db.Column(db.Text, nullable=False)
    tried_expected = db.Column(db.Text, nullable=False)
    tags = db.Column(db.String(15))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    question_answer = db.relationship("Answer", back_populates="answer_question")
    question_user = db.relationship("User", back_populates="user_question")
    question_likes = db.relationship("User", secondary=likes, back_populates="user_likes", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'question': self.question,
            'tried_expected': self.tried_expected,
            'tags': self.tags,
            'likes': len(self.question_likes)
        }

from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime
from .question import likes
from .answer import upvotes, downvotes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(255), nullable=True)
    location = db.Column(db.String(255), nullable=True)
    full_name = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    user_question = db.relationship("Question", back_populates="question_user")
    user_answer = db.relationship("Answer", back_populates="answer_user")
    user_likes = db.relationship("Question", secondary=likes, back_populates="question_likes", cascade="all, delete")
    user_upvote = db.relationship("Answer", secondary=upvotes, back_populates="answer_upvote", cascade="all, delete")
    user_downvote = db.relationship("Answer", secondary=downvotes, back_populates="answer_downvote", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

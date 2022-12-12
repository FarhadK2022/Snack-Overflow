from app.models import db, Answer, User, environment, SCHEMA

def seed_answers():

    user4 = User(
        username="Demo2",
        email="demo2@aa.io",
        password="password",
        full_name="Ricky Bobby"
    )

    user5 = User(
        username="Demo3",
        email="demo3@aa.io",
        password="password",
        full_name="Monty Python"
    )

    user6 = User(
        username="Demo4",
        email="demo4@aa.io",
        password="password",
        full_name="Ramsey Bolton"
    )

    answer_1 = Answer(
        question_id=1,
        user_id=3,
        body="yo the answer is 2 bruh",
        answer_upvote=[user6],
        answer_downvote=[user4, user5]
    )

    answer_2 = Answer(
        question_id=2,
        user_id=1,
        body="yo python is the answer brother",
        answer_downvote=[user4, user5, user6]
    )

    answer_3 = Answer(
        question_id=3,
        user_id=2,
        body="bretheren, go with 9 to the 10th cubed"
    )

    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)

    db.session.add(answer_1)
    db.session.add(answer_2)
    db.session.add(answer_3)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()

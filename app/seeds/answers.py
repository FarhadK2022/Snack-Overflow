from app.models import db, Answer, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_answers():
    answer_1 = Answer(
        question_id=1, user_id=3, body="yo the answer is 2 bruh"
    )

    answer_2 = Answer(
        question_id=2, user_id=1, body="yo python is the answer brother"
    )

    answer_3 = Answer(
        question_id=3, user_id=2, body="bretheren, go with 9 to the 10th cubed"
    )

    db.session.add(answer_1)
    db.session.add(answer_2)
    db.session.add(answer_3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()

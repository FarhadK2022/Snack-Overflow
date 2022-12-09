from app.models import db, Like, environment, SCHEMA

def seed_likes():
    first = Like(user_id=1, question_id=2)
    second = Like(user_id=2, question_id=3)
    third = Like(user_id=3, question_id=1)

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()

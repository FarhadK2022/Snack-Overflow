from app.models import db, Downvote, environment, SCHEMA


# Adds a demo downvote, you can add other downvotes here if you want
def seed_downvotes():
    demovote = Downvote(
        user_id= 1, answer_id= 1
        )
    marnievote = Downvote(
        user_id= 2, answer_id= 2
        )
    bobbievote = Downvote(
        user_id= 3, answer_id= 3
        )

    db.session.add(demovote)
    db.session.add(marnievote)
    db.session.add(bobbievote)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_downvotes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.downvotes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM downvotes")

    db.session.commit()

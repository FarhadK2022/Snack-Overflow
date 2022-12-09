from app.models import db, Upvote, environment, SCHEMA


# Adds a demo upvote, you can add other upvotes here if you want
def seed_upvotes():
    demovote = Upvote(
        user_id= 1, answer_id= 1
        )
    marnievote = Upvote(
        user_id= 2, answer_id= 2
        )
    bobbievote = Upvote(
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
def undo_upvotes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.upvotes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM upvotes")

    db.session.commit()

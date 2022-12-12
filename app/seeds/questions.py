from app.models import db, Question, User, environment, SCHEMA

def seed_questions():

    user7 = User(
        username="Demo5",
        email="demo5@aa.io",
        password="password",
        full_name="Ricky Schroder"
    )

    user8 = User(
        username="Demo6",
        email="demo6@aa.io",
        password="password",
        full_name="Monty Rangle"
    )

    user9 = User(
        username="Demo7",
        email="demo7@aa.io",
        password="password",
        full_name="Danica Glover"
    )

    question_1 = Question(
        user_id=1,
        title='Is ceral a soup?',
        question='I have been wondering lately do you guys think a bowl of ceral could be considered a soup?',
        tried_expected='I tried hitting up my bowl of ceral to see if the milk and ceral would turn soupy, but didnt notice a difference',
        tags='ceral'
    )
    question_2 = Question(
        user_id=2,
        title='Does pineapple belong on pizza?',
        question='I was having pizza the other night, and someone suggested pineapple on it when ordering and I thought they were crazy.',
        tried_expected="I tried ordering half of the pizza with pineapple and just didn't taste the appeal of it",
        tags='pineapple',
        question_likes=[user7, user8]
    )
    question_3 = Question(
        user_id=3,
        title='Is a hotdog considered a sandwich?',
        question='My class recently was having a debate on whether or not a hotdog could be considered a sandwich, I personally do not think it is',
        tried_expected='I made a hotdog and thought to myself, its on a singular piece of bread, bun, instead of two separate slices',
        tags='hotdog',
        question_likes=[user7, user8, user9]
    )

    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)

    db.session.add(question_1)
    db.session.add(question_2)
    db.session.add(question_3)
    db.session.commit()

def undo_questions():
    if environment == "production":
            db.session.execute(f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
            db.session.execute("DELETE FROM questions")

    db.session.commit()

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
    question_4 = Question(
    user_id=1, title='Can I eat goldfish as cereal?', question='Do you think milk and cheese sounds like a solid combo?', tried_expected='I have tried regular cereal, and regular goldfish', tags='goldfish', 'cereal'
    )

    question_5 = Question(
        user_id=2, title='Are muffins mini cakes?', question='Are muffins just mini and or cupcakes disguised as a pseudo healthy breakfast item via addition of berries?', tried_expected='I ate some muffins and some cupcakes and hated myself similarly between experiences', tags='carbs', 'muffin', 'cupcake'
    )

    question_6 = Question(
        user_id=3, title='Does anyone actually like rhubarb?', question='I know this is a popular dish, but objectively rhubarb tastes awful. Do people just cope with this fact by adding copious amounts of sugar to it?', tried_expected='Tried: to gag down a rhubarb pie  Expected: it not to be terrible  Actual: it was terrible', tags='rhubarb', 'pie'
    )

    question_7 = Question(
        user_id=1, title='Why does british food suck so bad?', question='Wondering what happened culturally through the years that would enable a single cuisine to be so bad?', tried_expected='Tried: fish & chips, beans for breakfast, black pudding, haggis Expected: something edible  Result: only fish and chips is good!', tags='fish', 'british', 'chips'
    )

    question_8 = Question(
        user_id=2, title='Does eating dino nuggies as 80% of diet make me a child?', question='When I tell people about my love for dino nuggies as a 42 year old they taunt and make fun of me. Is it not normal to love dino nuggies at this age?', tried_expected='I have only tried dino nuggies other food is so nasty', tags='dino', 'nuggies'
    )

    question_9 = Question(
        user_id=3, title='Should eggs be runny?', question='I have always fully cooked my eggs but the high end chefs I watch on tv always pull them off before they solidify, should my eggs be runny?', tried_expected='Tried: over-easy, over-medium, hard-boiled, fried, scrambled', tags='eggs'
    )

    question_10 = Question(
        user_id=1, title='Does ketchup go on a hot dog?', question='When I squirt some red gold on my dawg people laugh at me?', tried_expected='Tried: asking why people tell me I suck for putting catsup on my glizzy', tags='hotdog', 'ketchup'
    )

    question_11 = Question(
        user_id=2, title='Why do people think McDonalds fries are not delicious?', question='Have they not tried them? What fries are they eating?', tried_expected='Tried: Wendys, Burger King, In n Out, Sonic, Whattaburger', tags='fries','french'
    )

    question_12 = Question(
        user_id=3, title='Tootsie pop licks?', question='How many licks does it take to reach the center of a tootsie pop?', tried_expected='Tried: 25, 50, 75, 100 licks, Expected: Soft delicious core, Actual: Light candy coating remaining', tags='lollipop', 'licks', 'tootsie'
    )

    question_13 = Question(
        user_id=1, title='What is the point of corn ribs?', question='Why not just eat corn like a normal person as we have for hundreds of years?', tried_expected='Tried: cutting my corn into ribs like a true TikToker Expected: something different Actual: its like eating corn but HARDER', tags='corn'
    )

    question_14 = Question(
        user_id=2, title='Will drinking raw eggs kill me?', question='I see it in movies and TV all the time, people drinking raw eggs to get energy or pump iron. Can I do this?', tried_expected='Never had raw eggs', tags='eggs', 'raw'
    )

    question_15 = Question(
        user_id=3, title='Is almond milk real?', question='Where does it come from?', tried_expected='Tried: milking almonds, searching for almond cows Expected: Almond Milk  Result: nil', tags='almond', 'milk'
    )

    question_16 = Question(
        user_id=1, title='Tootsie pop licks?', question='How many licks does it take to reach the center of a tootsie pop?', tried_expected='Tried: 25, 50, 75, 100 licks, Expected: Soft delicious core, Actual: Light candy coating remaining', tags='lollipop', 'licks', 'tootsie'
    )

    question_17 = Question(
        user_id=2, title='Where did the name red velvet come from?', question='Is it not just chocolate cake dyed red? Why does it get some special name?', tried_expected='Tried: red velvet & chocolate velvet (aka regular chocolate) cake Expected: a difference', tags='red', 'velvet', 'cake'
    )

    question_18 = Question(
        user_id=3, title='Are shells the best macaroni for for macaroni and cheese?', question='I wanna make the best mac n cheese possible, can anyone help', tried_expected='Tried: Elbow, Pasta, Cartoon shapes', tags='macaroni', 'cheese', 'best'
    )

    question_19 = Question(
        user_id=1, title='Are artichokes worth it?', question='Your hands get messy, butter gets everywhere, there are potentially hazardous pieces of it that are inedible. Why bother with this food?', tried_expected='Tried: artichokes Expected: less hassle Actual: hella messy hands', tags='artichoke', 'hands', 'mess'
    )

    question_20 = Question(
        user_id=2, title='Is coleslaw a salad?', question='It has all the characteristics of a salad, why does it not get appreciation as one?', tried_expected='Tried: Cesar, Taco "salads", Expected: them to be different that coleslaw Actual: They are not', tags='salad', 'coleslaw'
    )

    question_21 = Question(
        user_id=3, title='Do people who like mint chocolate chip eat their toothpaste?', question='Why would they not? They literally taste the same', tried_expected='Tried: Toothpaste & Mint Choc Chip flavored items, Expected: a difference Actual: no difference', tags='mint', 'chocolate', 'icecream'
    )

    question_22 = Question(
        user_id=1, title='Are orange tic-tacs mints?', question='They are delicious and I can easily pounds these like M&Ms. What is the difference between mints and candy at that point?', tried_expected='Tried: eating orange tic-tacs 1 at a time Expected: Fresh breathe Actual: Ate the whole container', tags='orange', 'tic-tac', 'mint'
    )

    question_23 = Question(
        user_id=2, title='Does dipping oreos in milk take away their identity?', question='Does turning them into mush ruin the integrity? Alter the flavor profile?', tried_expected='Tried: dipping for 5, 10, 20 seconds at a time', tags='oreo', 'cookies', 'milk'
    )

    question_24 = Question(
        user_id=3, title='Rice Krispy cereal selection?', question='What is the best cereal to use for rice krispy treats other than rice krispies?', tried_expected='Tried: fruity pebbles, cocoa pebbles, cinnamon toast crunch', tags='cereal', 'krispy', 'treat'
    )

    question_25 = Question(
        user_id=1, title='Miracle Whip vs. Regular Mayo?', question='Which is used best in what scenario?', tried_expected='Tried: potato salad with both, sandwiches with both', tags='mayo', 'brands', 'mayonaisse'
    )

    question_26 = Question(
        user_id=2, title='Should you pour milk before cereal or cereal before milk?', question='What are the pros and cons of either? Why do you prefer your method?', tried_expected='Tried: cereal before milk', tags='cereal', 'milk'
    )

    question_27 = Question(
        user_id=3, title='Peanut butter and jelly side selection?', question='Do you put the peanut butter and the jelly on the same side of bread or peanut butter on 1 side and jelly on the other?', tried_expected='Tried: never made one', tags='peanutbutter', 'jelly'
    )

    question_28 = Question(
        user_id=1, title='Are boneless wings considered wings or chicken nuggets?', question='What is the difference between a chicken nugget and a boneless wing?', tried_expected='Tried: chicken nuggets and boneless wings', tags='nuggies', 'chicken', 'nuggets', 'wings'
    )

    question_29 = Question(
        user_id=2, title='Is feeding someone vegan cheese and posing it as real cheese a crime?', question='Why should we not persecute these people to the full extent of the law?', tried_expected='Tried: only real cheese brother', tags='cheese', 'vegan'
    )

    question_30 = Question(
        user_id=3, title='Why dont people put pickles on their pizza?', question='Its delicious, its similar to pineapples in adding a fresh acidity and crunch to the pizza to cut through the heaviness. Are people scared of pickles?', tried_expected='Tried: pizza with and without pickles', tags='pickles', 'pizza', 'toppings'
    )


    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)

    db.session.add(question_1)
    db.session.add(question_2)
    db.session.add(question_3)
    db.session.add(question_4)
    db.session.add(question_5)
    db.session.add(question_6)
    db.session.add(question_7)
    db.session.add(question_8)
    db.session.add(question_9)
    db.session.add(question_10)
    db.session.add(question_11)
    db.session.add(question_12)
    db.session.add(question_13)
    db.session.add(question_14)
    db.session.add(question_15)
    db.session.add(question_16)
    db.session.add(question_17)
    db.session.add(question_18)
    db.session.add(question_19)
    db.session.add(question_20)
    db.session.add(question_21)
    db.session.add(question_22)
    db.session.add(question_23)
    db.session.add(question_24)
    db.session.add(question_25)
    db.session.add(question_26)
    db.session.add(question_27)
    db.session.add(question_28)
    db.session.add(question_29)
    db.session.add(question_30)
    db.session.commit()

def undo_questions():
    if environment == "production":
            db.session.execute(f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
            db.session.execute("DELETE FROM questions")

    db.session.commit()

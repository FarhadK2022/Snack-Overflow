from app.models import db, Answer, User, environment, SCHEMA

def seed_answers():

    user4 = User(
        username="Alpha",
        email="demo2@aa.io",
        password="password",
        full_name="Ricky Bobby"
    )

    user5 = User(
        username="Beta",
        email="demo3@aa.io",
        password="password",
        full_name="Monty Python"
    )

    user6 = User(
        username="Gamma",
        email="demo4@aa.io",
        password="password",
        full_name="Ramsey Bolton"
    )

    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.commit()

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

    answer_4 = Answer(
        question_id=1,
        user_id=8,
        body="of course cereal is a soup, if gazpacho is a soup then cereal is a soup."
    )

    answer_5 = Answer(
        question_id=1,
        user_id=9,
        body="my brother... you spelled cereal wrong LMAO get wrecked"
    )

    answer_6 = Answer(
        question_id=1,
        user_id=7,
        body="what is the point of creating categories if we're just gonna throw them around willy nilly, I dont think cereal is a soup"
    )

    answer_7 = Answer(
        question_id=2,
        user_id=1,
        body="pineapple does not go on pizza, sorry but I am the original pizza maker and I say no!"
    )

    answer_8 = Answer(
        question_id=2,
        user_id=3,
        body="I'm fine with pineapple being on pizza people should just let other eat how they want."
    )

    answer_9 = Answer(
        question_id=2,
        user_id=4,
        body="ewww gross pizza is meant to be savory might as well eat a pizookie if you want a sweet pizza"
    )

    answer_10 = Answer(
        question_id=3,
        user_id=1,
        body="personally I dont think a hotdog is a sandwich I heard from the hotdog master, Brad Simpson that a sandwich is 2 pieces of bread and a hotdog bun is technically 1 piece."
    )

    answer_11 = Answer(
        question_id=3,
        user_id=2,
        body="no, no, no, HOTDOG is HOTDOG!"
    )

    answer_12 = Answer(
        question_id=3,
        user_id=4,
        body="if a hotdog is a sandwich then a tostada is just avocado toast no, thats wrong."
    )

    answer_13 = Answer(
        question_id=4,
        user_id=2,
        body="as gross as it sounds, you do you milk is already in cheese so you're just eating milk with extra milk"
    )

    answer_14 = Answer(
        question_id=4,
        user_id=3,
        body="bro this whole website is just basically people asking for permission to be gross"
    )

    answer_15 = Answer(
        question_id=4,
        user_id=4,
        body="sounds like someone needs an intervention"
    )

    answer_16 = Answer(
        question_id=4,
        user_id=5,
        body="oh my god this sounds delicious, brb gonna go try it now"
    )

    answer_17 = Answer(
        question_id=5,
        user_id=1,
        body="I guess that depends on what kind of muffins you're eating if its double chocolate chips then maybe"
    )

    answer_18 = Answer(
        question_id=5,
        user_id=3,
        body="from what I understand cakes tend to have a different consistency, so i'm leaning towards no"
    )

    answer_19 = Answer(
        question_id=5,
        user_id=4,
        body="braindead takes on the braindead app again, muffin is muffin, hotdog is hotdog, and cereal is NOT A SOUP!!!"
    )

    answer_20 = Answer(
        question_id=5,
        user_id=5,
        body="nah I dont think so muffins are more geared towards breakfast and cakes are dessert"
    )

    answer_21 = Answer(
        question_id=6,
        user_id=1,
        body="I kind of like it but mainly in pie probs wouldn't eat it otherwise"
    )

    answer_22 = Answer(
        question_id=6,
        user_id=2,
        body="yeah i think its definitely more regional its been hit or miss for me depending on who makes it"
    )

    answer_23 = Answer(
        question_id=6,
        user_id=4,
        body="nah fam, rhubarb is basically just red celery, fight me."
    )

    answer_24 = Answer(
        question_id=6,
        user_id=5,
        body="omg yes rhubarb is deeeeeeelicious, if you dont like it its probably because you have baby taste buds, grow up join the adults"
    )

    answer_25 = Answer(
        question_id=7,
        user_id=2,
        body="look at this guy over here trying to start the revolutionary war pt2: electric boogaloo"
    )

    answer_26 = Answer(
        question_id=7,
        user_id=3,
        body="brother you have not truly lived until you've had a full english brekky, then tried to waddle to work with an overfull belly"
    )

    answer_27 = Answer(
        question_id=7,
        user_id=4,
        body="aside from blood pudding the british have some good food, like curry, and chicken tikka masala... wait"
    )

    answer_28 = Answer(
        question_id=7,
        user_id=5,
        body="homecooked british food is like a nice warm hug from your mom, just right"
    )

    answer_29 = Answer(
        question_id=8,
        user_id=1,
        body="yes"
    )

    answer_30 = Answer(
        question_id=8,
        user_id=3,
        body="yes"
    )

    answer_31 = Answer(
        question_id=8,
        user_id=4,
        body="yes LMAO"
    )

    answer_32 = Answer(
        question_id=8,
        user_id=5,
        body="yes, bro expand your palette"
    )

    answer_33 = Answer(
        question_id=9,
        user_id=1,
        body="its all up to taste sometimes its good to stop before fully cooked, because the eggs will continue to cook even off the stove"
    )

    answer_34 = Answer(
        question_id=9,
        user_id=2,
        body="yeah I mean unless you're planning on eating rubbery or raw eggs its nice to find a middle ground"
    )

    answer_35 = Answer(
        question_id=9,
        user_id=4,
        body="nooooooo you're gonna get salmonella grooooooossssssss"
    )

    answer_36 = Answer(
        question_id=9,
        user_id=5,
        body="lol dont listen to the goober above me unless you're eating raw eggs you'll be fine just cook em how you like em"
    )

    answer_37 = Answer(
        question_id=10,
        user_id=2,
        body="'red gold' lmfao sir... eat your hotdog how you want this is AMERICA, FREEEEEEDOMMMMMMM!!!!!"
    )

    answer_38 = Answer(
        question_id=10,
        user_id=3,
        body="man you can eat your hotdog with as much ketchup as you want.. except here in chicago you'll get beat up for that only mustard and pickles"
    )

    answer_39 = Answer(
        question_id=10,
        user_id=4,
        body="no thats gross only babies put ketchup on stuff, grow up"
    )

    answer_40 = Answer(
        question_id=10,
        user_id=5,
        body="if it tastes good then go for it, i prefer my hotdog to be smothered in maple syrup and butter"
    )

    answer_41 = Answer(
        question_id=11,
        user_id=1,
        body="I think most people will admit the fries there are good its the rest of the food that gives my tummy a blue screen of death"
    )

    answer_42 = Answer(
        question_id=11,
        user_id=3,
        body="the fries taste like they've been fried in liquid gold, mcdonalds should be careful or they'll be invaded by america"
    )

    answer_43 = Answer(
        question_id=11,
        user_id=4,
        body="if you're still eating at mcdonalds i suggest you branch out a bit more theres a world of delicious fries out there"
    )

    answer_44 = Answer(
        question_id=11,
        user_id=5,
        body="the fries at mickey d's are just ok I'm more partial to the fries at wendy's"
    )

    answer_45 = Answer(
        question_id=12,
        user_id=1,
        body="this is a very good question i think most of us just got impatient and bit it but its gotta be in the 20,000 range right?"
    )

    answer_46 = Answer(
        question_id=12,
        user_id=2,
        body="I haven't tested this one myself but it sounds like you've got the spirit, go get em"
    )

    answer_47 = Answer(
        question_id=12,
        user_id=4,
        body="when I was younger I tried this and it took about 2178 individual licks you'd be surprised how many licks they can take"
    )

    answer_48 = Answer(
        question_id=12,
        user_id=5,
        body="who, cares"
    )

    answer_49 = Answer(
        question_id=13,
        user_id=2,
        body="I genuinely didnt even know what corn ribs were till now, just eat corn on the cob"
    )

    answer_50 = Answer(
        question_id=13,
        user_id=3,
        body="bro don't follow cringey tiktok trends especially when it comes to food"
    )

    answer_51 = Answer(
        question_id=13,
        user_id=4,
        body="im sorry, corn ribs that sounds absolutely gross"
    )

    answer_52 = Answer(
        question_id=13,
        user_id=5,
        body="CORRRRRRN RIIIIIIIIIBS yeah boyeeeeeeeeee lets goooooo"
    )

    answer_53 = Answer(
        question_id=14,
        user_id=1,
        body="I wouldn't suggest it to be quite honest, salmonella is a game of chances and you dont want to be the one to crap out"
    )

    answer_54 = Answer(
        question_id=14,
        user_id=3,
        body="I mean I wouldn't say its a guarantee but i wouldnt risk it just scramby those bad boys"
    )

    answer_55 = Answer(
        question_id=14,
        user_id=4,
        body="yes you can eat raw eggs source: 'trust me bro'"
    )

    answer_56 = Answer(
        question_id=14,
        user_id=5,
        body="just eat those raw eggs, the slippery slimy feeling down your throat is the best part"
    )

    answer_57 = Answer(
        question_id=15,
        user_id=1,
        body="'tried milking almonds' LMFAO i'm dying over here, pray tell where are an almonds nipples?"
    )

    answer_58 = Answer(
        question_id=15,
        user_id=2,
        body="as far as i know they just press the almonds and get the 'milk' out of them that way"
    )

    answer_59 = Answer(
        question_id=15,
        user_id=4,
        body="almond milk comes from the great almond cow that only exists in a mysterious land called schulzenhapfgfen"
    )

    answer_60 = Answer(
        question_id=15,
        user_id=5,
        body="its pretty simple a big batch of almonds is blended with water and then strained to remove the solids"
    )

    answer_61 = Answer(
        question_id=16,
        user_id=2,
        body="hasn't this question been asked already? I'm gonna guess 6 billion"
    )

    answer_62 = Answer(
        question_id=16,
        user_id=3,
        body="just keep licking and get back to us with an answer"
    )

    answer_63 = Answer(
        question_id=16,
        user_id=4,
        body="too many to count and I imagine you'd have some cavities before finding out"
    )

    answer_64 = Answer(
        question_id=16,
        user_id=5,
        body="at this point, son, I've been licking the same tootsie pop since 1968"
    )

    answer_65 = Answer(
        question_id=17,
        user_id=1,
        body="I imagine the red coloring comes from the spilling of innocent blood in search for cocoa"
    )

    answer_66 = Answer(
        question_id=17,
        user_id=3,
        body="from what I understand during ww2 bakers had to ration their sugar and butter which led to them using beet juice as a backup"
    )

    answer_67 = Answer(
        question_id=17,
        user_id=4,
        body="its red food coloring dont think about these things too much, stay in your own lane"
    )

    answer_68 = Answer(
        question_id=17,
        user_id=5,
        body="oh the red food coloring comes from the smashing of ladybugs in the cake recipe it also gives it that nice tangy taste, and protein"
    )

    answer_69 = Answer(
        question_id=18,
        user_id=1,
        body="yes of course shells are the best for mac and cheese they can hold extra cheese, its better this way"
    )

    answer_70 = Answer(
        question_id=18,
        user_id=2,
        body="realistically you can use any pasta you want but shells are just cooler"
    )

    answer_71 = Answer(
        question_id=18,
        user_id=5,
        body="shells are fine but if you really want to make the best mac n cheese add hotdogs"
    )

    answer_72 = Answer(
        question_id=18,
        user_id=6,
        body="no, you need the freshest of pasta imported from italy, yes even just for mac n cheese"
    )

    answer_73 = Answer(
        question_id=19,
        user_id=2,
        body="artichokes are delicious and definitely worth it, as far as them being messy thats what napkins are for"
    )

    answer_74 = Answer(
        question_id=19,
        user_id=3,
        body="what in gods name are artichokes?"
    )

    answer_75 = Answer(
        question_id=19,
        user_id=4,
        body="artichokes are for veggie lovers i prefer a strict diet of raw liver and fava beans"
    )

    answer_76 = Answer(
        question_id=19,
        user_id=5,
        body="this questions sounds like it came from the guy who eats nothing but dino nuggies, artichokes are fine, eat your veggies"
    )

    answer_77 = Answer(
        question_id=20,
        user_id=1,
        body="I wouldn't go so far as to call coleslaw a salad it kind of fits into a category by itself"
    )

    answer_78 = Answer(
        question_id=20,
        user_id=3,
        body="well, lets break this down its got veggies, leafy greens, dressing and isn't usually eaten as a main course... salad it is"
    )

    answer_79 = Answer(
        question_id=20,
        user_id=4,
        body="coleslaw kind of fits the category of salad but i think people tend to think salad = healthy, and coloeslaw isnt really healthy for you"
    )

    answer_80 = Answer(
        question_id=20,
        user_id=5,
        body="bro coleslaw is just mayo lettuce eww"
    )

    answer_81 = Answer(
        question_id=21,
        user_id=1,
        body="there's no way mint ice cream and toothpaste taste the same you're out of your mind"
    )

    answer_82 = Answer(
        question_id=21,
        user_id=2,
        body="mint chocolate chip enjoyers seething right now lol"
    )

    answer_83 = Answer(
        question_id=21,
        user_id=4,
        body="assuming this was asked in good faith, no, I do enjoy a bit of the mint choccy chip but toothpaste is gross."
    )

    answer_84 = Answer(
        question_id=21,
        user_id=5,
        body="yes I enjoy mint chocolate chip ice cream, yes I eat and enjoy toothpaste, yes we exist, rise up toothpaste eaters our time is now"
    )

    answer_85 = Answer(
        question_id=22,
        user_id=2,
        body="I wouldnt say they fall strictly in the mint category but they are nice after a meal, they wont help that garlic breath though"
    )

    answer_86 = Answer(
        question_id=22,
        user_id=3,
        body="no, orange tic-tacs are the god-king of tic-tacs you can just slam a container of those straight into the gobber and get a powerup, they unlock the untapped power inside all of us"
    )

    answer_87 = Answer(
        question_id=22,
        user_id=4,
        body="oh man orange tic tacs are fire, but I probably wouldnt call em mints if you can drink a glass of water after eating some without dying then they're not mints"
    )

    answer_88 = Answer(
        question_id=22,
        user_id=5,
        body="yes orange tic-tacs are mints the package clearly states, 'mints'"
    )

    answer_89 = Answer(
        question_id=23,
        user_id=1,
        body="...yes, you see the lonely oreo stands proud, tall, stoic, firm in its conviction, putting them in milk withers the oreo to a mushy shell of itself and thus destroys their integrity never to be regained"
    )

    answer_90 = Answer(
        question_id=23,
        user_id=3,
        body="oreos are meant to be dunked in milk, a dry oreo is a sad oreo"
    )

    answer_91 = Answer(
        question_id=23,
        user_id=4,
        body="i think oreos are fine both ways, dunking oreos in milk adds an extra je ne se quois that just bumps it up another level"
    )

    answer_92 = Answer(
        question_id=23,
        user_id=5,
        body="you really shouldnt be dunking to the point of them turning to mush you've crossed a line, a slight 5 second dunk just to soften them ever so slightly is all you need"
    )

    answer_93 = Answer(
        question_id=24,
        user_id=1,
        body="ooh I like to mix brussels sprouts with marshmallows and make brussels treats for my kids they love em"
    )

    answer_94 = Answer(
        question_id=24,
        user_id=2,
        body="i mean, the world is your oyster if you can dream it you can make it find the most s tier cereal and mix it with mallow boom you gots a treat"
    )

    answer_95 = Answer(
        question_id=24,
        user_id=4,
        body="I made some trix treats the other day, but you have to be very careful the white rabbit doesnt burst through your kitchen like the koolaid man"
    )

    answer_96 = Answer(
        question_id=24,
        user_id=5,
        body="I like to keep on the healthier side of snacks so i made a all bran treat but instead of marshmallows i used vegemite, it was so good"
    )

    answer_97 = Answer(
        question_id=25,
        user_id=2,
        body="honestly miracle is usually reserved for coleslaw or something I think hellmans is perfect for everything else miracle is just too tangy for day to day eating"
    )

    answer_98 = Answer(
        question_id=25,
        user_id=3,
        body="regular mayo is fine for everything miracle whip is gross, only weirdos eat that stuff"
    )

    answer_99 = Answer(
        question_id=25,
        user_id=4,
        body="as someone who eats a gallon of mayo a week I will be the one to tell you miracle whip is the way to go, i put it in my cereal, on my steak, I even brush my teeth with it"
    )

    answer_100 = Answer(
        question_id=25,
        user_id=5,
        body="mayo is gross, I dont know who invented it, but they need to be locked up, its just oil and eggs"
    )

    answer_101 = Answer(
        question_id=26,
        user_id=1,
        body="it should always be cereal first, come on i thought this had been settled."
    )

    answer_102 = Answer(
        question_id=26,
        user_id=3,
        body="if you pour your milk before your cereal you're a cereal killer this is established case law. Look up kellogs v bundy"
    )

    answer_103 = Answer(
        question_id=26,
        user_id=4,
        body="I may very well be the only person who pours their milk first, I like living on the edge. The police have been hunting me for 2 years but they'll never find me or my lucky charms"
    )

    answer_104 = Answer(
        question_id=26,
        user_id=5,
        body="cereal first milk second dont blaspheme the food that gave us vitality when we were starved for our parents affection"
    )

    answer_105 = Answer(
        question_id=27,
        user_id=1,
        body="i may very well be an outlier but I put pb and jelly on both sides for extra yumminess"
    )

    answer_106 = Answer(
        question_id=27,
        user_id=2,
        body="a thick layer of crunchy pb on one side and a light layer of jelly on the other, dont @ me"
    )

    answer_107 = Answer(
        question_id=27,
        user_id=4,
        body="an even layer of pb on one side and an even layer of jelly on the other boom perfect pb&j"
    )

    answer_108 = Answer(
        question_id=27,
        user_id=5,
        body="pb&j is for babies can you really call yourself a man if you dont eat toast with a healthy dollop of vegemite and coffee grounds"
    )

    answer_109 = Answer(
        question_id=28,
        user_id=2,
        body="wings indicate to me that there will be bones therefore boneless wings are an oxymoron, those are just saucy nugs"
    )

    answer_110 = Answer(
        question_id=28,
        user_id=3,
        body="its just a name dont think too much about it ultimately food companies name things a certain way because they know we'll buy em regardless"
    )

    answer_111 = Answer(
        question_id=28,
        user_id=4,
        body="if we're going to call them boneless wings then we're going to have to start calling the opposite bonefull wings and thats just weird"
    )

    answer_112 = Answer(
        question_id=28,
        user_id=5,
        body="boneless waaaaaaaaaaangs gimme gimme gimme"
    )

    answer_113 = Answer(
        question_id=29,
        user_id=1,
        body="found the vegan, lol. seriously though dont do this, it may not be your choice to eat real cheese but at least respect someone else's choice"
    )

    answer_114 = Answer(
        question_id=29,
        user_id=3,
        body="I don't know if I would go so far as to say it's a crime but its probably not going to go well, you ever had vegan cheese? it's gross"
    )

    answer_115 = Answer(
        question_id=29,
        user_id=4,
        body="yes, this is a crime I am a police officer and I have notified the proper authorities about the propect of a cheese crime"
    )

    answer_116 = Answer(
        question_id=29,
        user_id=5,
        body="do you know how many vegans had to die in order for vegan cheese to be made? tens of vegans, their meatless blood is all over your hands you monster"
    )

    answer_117 = Answer(
        question_id=30,
        user_id=1,
        body="this is both unsettling, and interesting i'll give it a try but I dont have high hopes"
    )

    answer_118 = Answer(
        question_id=30,
        user_id=2,
        body="It's pretty good tbh, but you have to be careful you dont want a pizza with a soggy bottom so dab the pickles a bit before throwing them on the pizza"
    )

    answer_119 = Answer(
        question_id=30,
        user_id=4,
        body="man i would hate to see what some of the users on this site's toilets look like, crime scenes I imagine"
    )

    answer_120 = Answer(
        question_id=30,
        user_id=5,
        body="oh man it's so good I love it but I also eat pickle sandwiches, pickle soup, pickle gumbo, pickle cereal, pickle shakes, pickle smoothies and lastly the mythological KOOLICKLE"
    )

    db.session.add(answer_1)
    db.session.add(answer_2)
    db.session.add(answer_3)
    db.session.add(answer_4)
    db.session.add(answer_5)
    db.session.add(answer_6)
    db.session.add(answer_7)
    db.session.add(answer_8)
    db.session.add(answer_9)
    db.session.add(answer_10)
    db.session.add(answer_11)
    db.session.add(answer_12)
    db.session.add(answer_13)
    db.session.add(answer_14)
    db.session.add(answer_15)
    db.session.add(answer_16)
    db.session.add(answer_17)
    db.session.add(answer_18)
    db.session.add(answer_19)
    db.session.add(answer_20)
    db.session.add(answer_21)
    db.session.add(answer_22)
    db.session.add(answer_23)
    db.session.add(answer_24)
    db.session.add(answer_25)
    db.session.add(answer_26)
    db.session.add(answer_27)
    db.session.add(answer_28)
    db.session.add(answer_29)
    db.session.add(answer_30)
    db.session.add(answer_31)
    db.session.add(answer_32)
    db.session.add(answer_33)
    db.session.add(answer_34)
    db.session.add(answer_35)
    db.session.add(answer_36)
    db.session.add(answer_37)
    db.session.add(answer_38)
    db.session.add(answer_39)
    db.session.add(answer_40)
    db.session.add(answer_41)
    db.session.add(answer_42)
    db.session.add(answer_43)
    db.session.add(answer_44)
    db.session.add(answer_45)
    db.session.add(answer_46)
    db.session.add(answer_47)
    db.session.add(answer_48)
    db.session.add(answer_49)
    db.session.add(answer_50)
    db.session.add(answer_51)
    db.session.add(answer_52)
    db.session.add(answer_53)
    db.session.add(answer_54)
    db.session.add(answer_55)
    db.session.add(answer_56)
    db.session.add(answer_57)
    db.session.add(answer_58)
    db.session.add(answer_59)
    db.session.add(answer_60)
    db.session.add(answer_61)
    db.session.add(answer_62)
    db.session.add(answer_63)
    db.session.add(answer_64)
    db.session.add(answer_65)
    db.session.add(answer_66)
    db.session.add(answer_67)
    db.session.add(answer_68)
    db.session.add(answer_69)
    db.session.add(answer_70)
    db.session.add(answer_71)
    db.session.add(answer_72)
    db.session.add(answer_73)
    db.session.add(answer_74)
    db.session.add(answer_75)
    db.session.add(answer_76)
    db.session.add(answer_77)
    db.session.add(answer_78)
    db.session.add(answer_79)
    db.session.add(answer_80)
    db.session.add(answer_81)
    db.session.add(answer_82)
    db.session.add(answer_83)
    db.session.add(answer_84)
    db.session.add(answer_85)
    db.session.add(answer_86)
    db.session.add(answer_87)
    db.session.add(answer_88)
    db.session.add(answer_89)
    db.session.add(answer_90)
    db.session.add(answer_91)
    db.session.add(answer_92)
    db.session.add(answer_93)
    db.session.add(answer_94)
    db.session.add(answer_95)
    db.session.add(answer_96)
    db.session.add(answer_97)
    db.session.add(answer_98)
    db.session.add(answer_99)
    db.session.add(answer_100)
    db.session.add(answer_101)
    db.session.add(answer_102)
    db.session.add(answer_103)
    db.session.add(answer_104)
    db.session.add(answer_105)
    db.session.add(answer_106)
    db.session.add(answer_107)
    db.session.add(answer_108)
    db.session.add(answer_109)
    db.session.add(answer_110)
    db.session.add(answer_111)
    db.session.add(answer_112)
    db.session.add(answer_113)
    db.session.add(answer_114)
    db.session.add(answer_115)
    db.session.add(answer_116)
    db.session.add(answer_117)
    db.session.add(answer_118)
    db.session.add(answer_119)
    db.session.add(answer_120)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()

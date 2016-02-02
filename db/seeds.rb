User.delete_all

scott = User.create({ username: 'scott', password: 'password' })
minijo = User.create({ username: "minijo", password: 'password' })
davidkarpinski = User.create({ username: 'davidkarpinski', password: 'password' })

lisajane = User.create({ username: 'lisajane', password: 'password' })
geoffreyhusseinkrawczyk = User.create({ username: 'geoffreyhusseinkrawczyk', password: 'password' })
jamesboatwright = User.create({ username: 'jamesboatwright', password: 'password' })
desireemervau = User.create({ username: 'desireemervau', password: 'password' })
katehurley = User.create({ username: 'katehurley', password: 'password' })
marlaynacatlett = User.create({ username: 'marlaynacatlett', password: 'password' })
shastiolearysoudant = User.create({ username: 'shastiolearysoudant', password: 'password' })
joshuavonstout = User.create({ username: 'joshuavonstout', password: 'password' })
jessicariot = User.create({ username: 'jessicariot', password: 'password' })
taramerry = User.create({ username: 'taramerry', password: 'password' })
reesewentz = User.create({ username: 'reesewentz', password: 'password' })
brendankelly = User.create({ username: 'brendankelly', password: 'password' })
arielleavenia = User.create({ username: 'arielleavenia', password: 'password' })
arianauffman = User.create({ username: 'arianauffman', password: 'password' })
spencercampbell = User.create({ username: 'spencercampbell', password: 'password' })

Term.delete_all
scott.createTerm({    term: "It ain't all ham and plaques.",
    definition: "Life doesn't always reward you.",
    usage: "Nice pig-farming trophy, son, but it ain't all ham and plaques."
  })
scott.createTerm(  {    term: "The bee's knees",
    definition: "A thing that is good.",
    usage: "This artisanal honey and ham hock charcuterie is the bee's knees."
  })
scott.createTerm ({    term: "The cat's pajamas",
    definition: "A thing that is good.",
    usage: "These feline-printed, hand-woven silk bedclothes are the cat's pajamas."
  })
davidkarpinski.createTerm ({    term: "Sweet sassy mo-lassy",
    definition: "Wow; holy mackerel.",
    usage: "Sweet sassy mo-lassy these cookies are good!"
  })
spencercampbell.createTerm ({
    term: "Poppin' a Mallick",
    definition: "Alejandro González Iñárritu shooting pretty shots.",
    usage: "Wow, \"The Revenant\" is really poppin' a Mallick."
  })
lisajane.createTerm ({    term: "Hot dog!",
    definition: "Hot diggity dog! Jeez o Pete!",
    usage: "Hot dog! Am I ever enjoying these frankfurters!"
  })
geoffreyhusseinkrawczyk.createTerm ({    term: "23 Skidoo",
    definition: "To depart with haste.",
    usage: "All right, gentlemen, enough rough-housing. Time to 23 Skidoo."
  })
geoffreyhusseinkrawczyk.createTerm ({    term: "Don't take any wooden nickels!",
    definition: "Proceed with caution.",
    usage: "This here lumberjack doesn't seem on the up and up. Don't take any wooden nickels!"
  })
jamesboatwright.createTerm ({    term: "See you on the flip side.",
    definition: "Fare thee well, fine fellow.",
    usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  })
desireemervau.createTerm ({    term: "Applesauce!",
    definition: "Rubbish! Piffle! (Cassell)",
    usage: "Aloysius: \"You would really enjoy these Granny Smiths I have cooked down.\"\rGertrude: \"Applesauce!\""
  })
katehurley.createTerm ({    term: "Fuck that noise!",
    definition: "No! No way!",
    usage: "Aloysius \"Would you care to attend Stravinsky's 'Rite of Spring,' conducted by Toscanini, this evening?\"\rGertrude: \"Fuck that noise!\""
  })
minijo.createTerm ({    term: "Caddywompus",
    definition: "Old codger",
    usage: "The elderly fella what carries my clubs is a real caddywompus."
  })
minijo.createTerm ({    term: "Banana oil.",
    definition: "That's doubtful.",
    usage: "Aloysius: \"These here potassium sticks are good for your health.\"\rGertrude: \"Banana oil!\""
  })
minijo.createTerm ({
    term: "Barneymugging",
    definition: "Intercourse",
    usage: "Care for a session of barneymugging?"
  })
minijo.createTerm ({
    term: "Bug-eyed betty",
    definition: "An ugly woman",
    usage: "Ol' Elizabeth Flye sure is one bug-eyed betty."
  })
minijo.createTerm ({
    term: "Burning with a blue flame",
    definition: "Drunk",
    usage: "The chaps and I were burning with a blue flame when we went camping."
  })
minijo.createTerm ({
    term: "Facestretcher",
    definition: "Cougar",
    usage: "Joan Rivers was a real facestretcher when she still blessed this planet with her presence."
  })

minijo.createTerm ({
    term: "Forty-niner",
    definition: "A male gold-digger",
    usage: "I heard ol' Joe Montana was a real forty-niner."
  })
minijo.createTerm ({
    term: "Kick the gong around",
    definition: "Smoke opium",
    usage: "\"He took her down to Chinatown, and taught how to kick the gong around.\"",
    video_url: "https://www.youtube.com/embed/8mq4UT4VnbE"
  })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # })
  # .createTerm ({
  #  #   term: "See you on the flip side.",
  #   definition: "Fare thee well, fine fellow.",
  #   usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  # }

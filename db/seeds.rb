# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
users = User.create([
  {
    username: 'scott',
    password: 'password'
  },
  {
    username: "minijo",
    password: 'password'
  },
  {
    username: 'davidkarpinski',
    password: 'password'
  },
  {
    username: 'lisajane',
    password: 'password'
  },
  {
    username: 'geoffreyhusseinkrawczyk',
    password: 'password'
  },
  {
    username: 'jamesboatwright',
    password: 'password'
  },
  {
    username: 'desireemervau',
    password: 'password'
  },
  {
    username: 'katehurley',
    password: 'password'
  },
  {
    username: 'marlaynacatlett',
    password: 'password'
  },
  {
    username: 'shastiolearysoudant',
    password: 'password'
  },
  {
    username: 'joshuavonstout',
    password: 'password'
  },
  {
    username: 'jessicariot',
    password: 'password'
  },
  {
    username: 'taramerry',
    password: 'password'
  },
  {
    username: 'reesewentz',
    password: 'password'
  },
  {
    username: 'brendankelly',
    password: 'password'
  },
  {
    username: 'arielleavenia',
    password: 'password'
  },

  {
    username: 'arianauffman',
    password: 'password'
  },
  {
    username: 'spencercampbell',
    password: 'password'
  }

  ])

Term.delete_all
Term.create([
  {
    user_id: 1,
    term: "It ain't all ham and plaques.",
    definition: "Life doesn't always reward you.",
    usage: "Nice pig-farming trophy, son, but it ain't all ham and plaques."
  },
  {
    user_id: 1,
    term: "The bee's knees",
    definition: "A thing that is good.",
    usage: "This artisanal honey and ham hock charcuterie is the bee's knees."
  },
  {
    user_id: 1,
    term: "The cat's pajamas",
    definition: "A thing that is good.",
    usage: "These feline-printed, hand-woven silk bedclothes are the cat's pajamas."
  },
  {
    user_id: 3,
    term: "Sweet sassy mo-lassy",
    definition: "Wow; holy mackerel.",
    usage: "Sweet sassy mo-lassy these cookies are good!"
  },
  {
    user_id: 18,
    term: "Poppin' a Mallick",
    definition: "Alejandro González Iñárritu shooting pretty shots.",
    usage: "Wow, \"The Revenant\" is really poppin' a Mallick."
  },
  {
    user_id: 4,
    term: "Hot dog!",
    definition: "Hot diggity dog! Jeez o Pete!",
    usage: "Hot dog! Am I ever enjoying these frankfurters!"
  },
  {
    user_id: 5,
    term: "23 Skidoo",
    definition: "To depart with haste.",
    usage: "All right, gentlemen, enough rough-housing. Time to 23 Skidoo."
  },
  {
    user_id: 5,
    term: "Don't take any wooden nickels!",
    definition: "Proceed with caution.",
    usage: "This here lumberjack doesn't seem on the up and up. Don't take any wooden nickels!"
  },
  {
    # James
    user_id: 6,
    term: "See you on the flip side.",
    definition: "Fare thee well, fine fellow.",
    usage: "I'm off for a game of heads-or-tails. See you on the flip side."
  }


  ])

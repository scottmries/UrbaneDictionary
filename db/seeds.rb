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
  }
  ])

Term.delete_all
Term.create([
  {
    user_id: 1,
    term: "I ain't all ham and plaques.",
    definition: "Life doesn't always reward you.",
    usage: "Nice pig-farming trophy, son, but I ain't all ham and plaques."
  },
  {
    user_id: 1,
    term: "The bee's knees",
    definition: "A thing that is good.",
    usage: "This artesanal honey and foie gras charcuterie is the bee's knees."
  },
  {
    user_id: 1,
    term: "The cat's pajamas",
    definition: "A thing that is good.",
    usage: "These feline-printed, hand-woven silk bedclothes are the cat's pajamas."
  }
  ])

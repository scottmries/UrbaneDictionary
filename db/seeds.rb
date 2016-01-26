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

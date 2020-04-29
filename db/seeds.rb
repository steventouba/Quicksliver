# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Users = User.create([
  {username: 'Poseidon', email: 'poseidon@athens.com', phone_number: '555-555-5555', password: 123456 },
  {username: 'Zeus', email: 'zeus@athens.com', phone_number: '555-555-5333', password: 123456 },
  {username: 'Hera', email: 'hera@athens.com', phone_number: '555-555-0000', password: 123456 },
  {username: 'Demeter', email: 'demeter@athens.com', phone_number: '555-555-0000', password: 123456 },
  {username: 'Artemis', email: 'artemis@athens.com', password: 123456 },
  {username: 'Dionysus', email: 'dionysus@athens.com', password: 123456 },
  {username: 'Hades', email: 'hades@hades.com', phone_number: '863-379-6753', password: 123456 }
])

Channels = Channel.create([
  {name: 'AthensHub', creator_id: 1},
  {name: 'Olympus', creator_id: 2, channel_type: 0, is_private: true},
  {name: 'TheBros', creator_id: 7, channel_type: 0, is_private: true},
  {name: 'Hades,Zeus', creator_id: 7, channel_type: 1, is_private: true},
  {name: 'Hades,Poseidon', creator_id: 1, channel_type: 1, is_private: true},
])

ChannelMemberships = ChannelMembership.create([ 
  {user_id: 1, channel_id: 1, is_admin: true},
  {user_id: 2, channel_id: 1, is_admin: true},
  {user_id: 3, channel_id: 1, is_admin: true},
  {user_id: 4, channel_id: 1},
  {user_id: 5, channel_id: 1},
  {user_id: 6, channel_id: 1},
  {user_id: 7, channel_id: 1},
  {user_id: 1, channel_id: 2},
  {user_id: 2, channel_id: 2, is_admin: true},
  {user_id: 3, channel_id: 2,},
  {user_id: 1, channel_id: 3,},
  {user_id: 2, channel_id: 3, is_admin: true},
  {user_id: 7, channel_id: 3},
  {user_id: 2, channel_id: 4},
  {user_id: 7, channel_id: 4}, 
  {user_id: 7, channel_id: 5}, 
  {user_id: 1, channel_id: 5}
])

Messages = Message.create([
  {body: 'Welcome', author_id: 2, channel_id: 1},
  {body: 'Welcome', author_id: 2, channel_id: 2},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: '...', author_id: 7, channel_id: 5},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: 'Can\'t help you there, bad case of the plague going through hades, we\'re  locked down', author_id: 7, channel_id: 5},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: 'right...', author_id: 7, channel_id: 5},
  {body: 'Hello Hades', author_id: 2, channel_id: 4},
  {body: 'Listen, are you gonna have those TPS reports for us this afternoon?', author_id: 2, channel_id: 4},
  {body: 'Ah. Well then I suppose we should go ahead and have a little talk.', author_id: 2, channel_id: 4},
  {body: 'I wasn\'t aware of a meeting with them.', author_id: 2, channel_id: 4},
  {body: 'No.', author_id: 7, channel_id: 4},
  {
    body: 'Not right now Zeus, I\'m kinda busy. You know what, in fact I\'m gonna have to ask you to 
    just go ahead and come back later, I\'ve got a meeting with the Poseidon and Hera in a couple minutes.',
     author_id: 7, channel_id: 4
  },
  {body: 'Yeah, they called me at Hades.', author_id: 7, channel_id: 4}
])


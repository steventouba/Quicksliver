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
  {username: 'Hades', email: 'hades@hades.com', phone_number: '863-379-6753', password: 123456 },
  {username: 'Hermes', email: 'speedyH@quicksilver.com', phone_number: '929-866-3278', password: 123456 }
])

Channels = Channel.create([
  {name: 'Olympus', creator_id: 2},
  {name: 'AthensHub', creator_id: 2, channel_type: 0, is_private: true},
  {name: 'TheBros', creator_id: 7, channel_type: 0, is_private: true},
  {name: 'Hades,Zeus', creator_id: 7, channel_type: 1, is_private: true},
  {name: 'Hades,Poseidon', creator_id: 1, channel_type: 1, is_private: true},
  {name: 'Hades,Demeter', creator_id: 7, channel_type: 1, is_private: true},
])

ChannelMemberships = ChannelMembership.create([ 
  {user_id: 1, channel_id: 1, is_admin: true},
  {user_id: 2, channel_id: 1, is_admin: true},
  {user_id: 3, channel_id: 1, is_admin: true},
  {user_id: 4, channel_id: 1},
  {user_id: 5, channel_id: 1},
  {user_id: 6, channel_id: 1},
  {user_id: 7, channel_id: 1},
  {user_id: 8, channel_id: 1},
  {user_id: 1, channel_id: 2, is_admin: true},
  {user_id: 2, channel_id: 2, is_admin: true},
  {user_id: 3, channel_id: 2, is_admin: true},
  {user_id: 4, channel_id: 2},
  {user_id: 5, channel_id: 2},
  {user_id: 6, channel_id: 2},
  {user_id: 7, channel_id: 2},
  {user_id: 8, channel_id: 2},
  {user_id: 1, channel_id: 3,},
  {user_id: 2, channel_id: 3, is_admin: true},
  {user_id: 7, channel_id: 3},
  {user_id: 2, channel_id: 4},
  {user_id: 7, channel_id: 4}, 
  {user_id: 7, channel_id: 5}, 
  {user_id: 1, channel_id: 5},
  {user_id: 7, channel_id: 6},
  {user_id: 4, channel_id: 6},
])

Messages = Message.create([
  {body: 'Welcome to the future of communication', author_id: 8, channel_id: 1},
  {body: 'I got tired of racing around the globe so I outsourced my work and image to a snazzy new tech company. My coworkers are satisfied too, do you realize how ridiculous the budget for scrolls is?', author_id: 8, channel_id: 1},
  {body: 'Anyways have a look around. When you\'re ready to leave there\'s a logout button under Mount Olympus, just don\'t rile the titans!' , author_id: 8, channel_id: 1},
  {body: 'If you\'re every curious about when a message was sent, hover over the timestamp to get more enough.' , author_id: 8, channel_id: 1},
  {body: 'Whelp, I better go make myself useful before I get downsized. The Bobs are here.' , author_id: 8, channel_id: 1},
  {body: 'This is cool', author_id: 2, channel_id: 1},
  {body: 'Welcome', author_id: 2, channel_id: 2},
  {body: 'Just want to make sure everyone got the memo about cover sheets on their TPS reports?', author_id: 2, channel_id: 2},
  {body: 'Does anyone know what this PC LOAD LETTER is?', author_id: 6, channel_id: 2},
  {body: 'Has anyone seen my purse?', author_id: 3, channel_id: 2},
  {body: 'Just want to make sure everyone got the memo about cover sheets on your TPS Reports?', author_id: 1, channel_id: 2},
  {body: 'Oh, and next Friday... is Hawaiian shirt day... so, you know, if you want to you can go ahead and wear a Hawaiian shirt and jeans.', author_id: 2, channel_id: 2},
  {body: 'No, not again. I... why does it say paper jam when there is no paper jam? I swear to God, one of these days, I just kick this thing out the window.' , author_id: 6, channel_id: 2},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: '...', author_id: 7, channel_id: 5},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: 'Can\'t help you there, bad case of the plague going through hades, we\'re locked down', author_id: 7, channel_id: 5},
  {body: 'I believe you have my stapler.', author_id: 1, channel_id: 5},
  {body: 'right...', author_id: 7, channel_id: 5},
  {body: 'Hello Hades', author_id: 2, channel_id: 4},
  {body: 'Listen, are you gonna have those TPS reports for us this afternoon?', author_id: 2, channel_id: 4},
  {body: 'No.', author_id: 7, channel_id: 4},
  {body: 'Ah. Well then I suppose we should go ahead and have a little talk.', author_id: 2, channel_id: 4},
  {
    body: 'Not right now Zeus, I\'m kinda busy. You know what, in fact I\'m gonna have to ask you to 
    just go ahead and come back later, I\'ve got a meeting with the Poseidon and Hera in a couple minutes.',
     author_id: 7, channel_id: 4
  },
  {body: 'I wasn\'t aware of a meeting with them.', author_id: 2, channel_id: 4},
  {body: 'Yeah, they called me at Hades.', author_id: 7, channel_id: 4}, 
  {body: 'What would you say you do here?.', author_id: 7, channel_id: 6}, 
  {body: 'Only about 15 minutes of actual work a week.', author_id: 4, channel_id: 6}, 
  {body: 'Welcome to the meeting of the minds, we\'re here to boost workplace productivity and morale. Let\'s brainstorm.', author_id: 7, channel_id: 3}, 
  {body: 'Why am I here?', author_id: 1, channel_id: 3}, 
  {body: 'Workers don\'t need morale, they just need to work.', author_id: 2, channel_id: 3}, 
  {body: 'Our retention is terrible, I don\'t want to keep coming in the weekends', author_id: 7, channel_id: 3}, 
  {body: 'You think children and relatives would have more respect and dedication to the workplace.', author_id: 2, channel_id: 3}, 

])


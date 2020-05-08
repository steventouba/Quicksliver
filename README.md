# Quicksliver 

[Live Demo](https://quicksilver1.herokuapp.com/#/)

## Description
Quicksilver is a single page messaging app, inspired by slack, greek mytholgoy and Office Space. It allows users to create, send, and receive messages in realtime. 

## Technologies Used 
  * Backend: Ruby on Rails / PostgreSQL
  * Frontend: React / Redux / jquery 
  * Hosting: Heroku 
  * Websockets: ActionCable 
  
## Features 

**Channels** 
A user can have multiple channels that they either create or are shared with them. 
![channel show](app/assets/images/channel-show.png)

A user can create a private channel by toggling the switch 
![channel create](app/assets/images/channel-create.png)
![channel private](app/assets/images/private-channel.png)

## Live Chat Technical Overview 

 ActionCable was introduced around 2015 in Rails version 5. It allows for the creation of multiple Pub/Sub connections per websocket connection. A user can subscribe to and broadcast from multiple instances of a channel at the same time. When a user publishes information, it sent back to the channel "controller" using a custom defined method on the client side. From there the message is saved to the database and broadcast back to the appropriate channel instance. 
 
  **Code has been commented to provide background**
```javascript
  handleSubmit() {
    event.preventDefault();
    let message = { 
      //the channel id obtained from the route url and threaded from the parent component
      channelId: this.props.currentChannel, 
      body: this.state.body, 
      //the user id obtained from the session slice of state and threaded from the parent component
      userId: this.props.currentUser.id
    }
    //speak is a custom method that corresponds to a chatChannel method
    App.cable.subscriptions.subscriptions[0].speak({ message: message}); 
    this.setState({ body: "" });
  }
  ```
  
  ```ruby 
  class ChatChannel < ApplicationCable::Channel
   def subscribed
     # stream_from "some_channel"

     stream_for "room-#{params["room"]}:messages"
   end

   def speak(data) 
     message = Message.create(
       author_id: data['message']['userId'], 
       body: data['message']['body'], 
       channel_id: data['message']['channelId']
     )

     socket = { message: 
       {id: message.id, 
         authorId: message.author_id, 
         body: message.body, 
         channelId: message.channel_id, 
         createdAt: message.created_at
       }
     }

     ChatChannel.broadcast_to("room-#{params["room"]}:messages", socket )
   end 

   def unsubscribed
     # Any cleanup needed when channel is unsubscribed
   end
end
```

A listener is used to fetch and create subscriptions to all pre-existing user channels. When a new channel is created the listener will create the resulting subscription along with the custom speak and received methods. 

```javascript 
import React from 'react';

class Listener extends React.Component { 
  constructor(props) { 
    super(props)
  }

  componentDidMount() { 
    this.props.fetchChannelMemberships(this.props.currentUser.id)
    this.props.fetchUserChannels(this.props.currentUser.id) //channels are fetched using an ajax call 
    // a promise is used to ensure subscriptions are created for all channels 
      .then((channels) => this.createSubscriptions(channels)) 
  }

  componentDidUpdate(prevProps) { 
    if ( prevProps.channels.length !== 0 && prevProps.channels.length < this.props.channels.length) {
      const newChannel = { channels: { channels: this.props.channels[this.props.channels.length - 1]}}
      //on an update a subscription will be created for only the most recently created  channel 
      this.createSubscriptions(newChannel);  
    }
  }

  createSubscriptions(channels) { 
    Object.values(channels.channels).map(channel => (
      App.cable.subscriptions.create(
        {channel: 'ChatChannel', room: channel.id}, 
        { 
          received: data => { 
            let messagePayload = { 
              [data.message.id]: data.message
            }
            //action creator that will update redux store everytime a message is broadcast 
            this.props.receiveMessage(messagePayload) 
          },
          speak: function(data) { 
          /*speak is how data(messages) are sent to the Channel controller,
           perform is an ActionCable method that executes               
           the speak method on the channel perform(action, data = {})*/ 
            return this.perform('speak', data)
          }
        }
      )

    ))
  }

  render() { 
    return(
      null
    )
  }
}
```

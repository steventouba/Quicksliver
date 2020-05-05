import React from 'react';

class Listener extends React.Component { 
  constructor(props) { 
    super(props)
  }

  componentDidMount() { 
    this.props.fetchChannelMemberships(this.props.currentUser.id)
    this.props.fetchUserChannels(this.props.currentUser.id)
      .then((channels) => this.createSubscriptions(channels))
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
            this.props.receiveMessage(messagePayload)
          },
          speak: function(data) { 
            return this.perform('speak', data)
          }
        }
      )

    ))
  }

  render() { 
    return(
      // <div></div>
      null
    )
  }
}

export default Listener; 
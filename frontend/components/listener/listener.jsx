import React from 'react';

class Listener extends React.Component { 
  constructor(props) { 
    super(props)
  }

  componentDidMount() { 
    this.createSubscriptions()
  }

  createSubscriptions() { 
  
    this.props.channels.map(channel => (
      App.cable.subscriptions.create(
        {channel: 'ChatChannel', room: channel.id}, 
        { 
          received: data => { 
            let messagePayload = { 
              [data.message.id]: data.message
            }
         //debugger
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
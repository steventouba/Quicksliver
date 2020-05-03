import React from 'react';

class Listener extends React.Component { 
  constructor(props) { 
    super(props)
  }

  componentDidMount() { 
    this.createSubscriptions()
  }

  createSubscriptions() { 
    debugger
    this.props.channels.map(channel => (
      App.cable.subscriptions.create(
        {channel: 'ChatChannel', room: channel.id}, 
        { 
          connected: () => console.log(`connected to ${channel.id}`)
        },
        { 
          disconnected: () => console.log(`disconnected from ${channel.id}`)
        }, 
        { 
          received: data => { 
            let messagePayload = { 
              message: { 
                [data.message.id]: data.message
              }
            }
            this.props.receiveMessage(messagePayload)
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
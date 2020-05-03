import React from 'react'; 

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:[...props.messages], 
      currentChannel: props.currentChannel
    }
  }  

  componentDidMount() { 
    this.props.fetchMessages()
  }
  
  // componentDidUpdate() { 
   
  // }
  // componentWillUnmount() { 
  //   null
  // }

  
  render () {
    let messages = []; 
    this.props.messages.map(message => {
      if (parseInt(this.props.currentChannel) === message.channelId) {
        messages.push(<div className ='message-list-item' key={message.id}>
          {message.body}
        </div>)
      }
    })
  debugger
    return (
      <div className='main-channel-message-list'>
        {messages}
      </div>
    )
  }
}

export default MessageList
import React from 'react'; 
import MessageForm from './message_form'; 

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:[...props.messages], 
      currentChannel: props.currentChannel
    }
    debugger
  }  

  componentDidMount() { 
    this.props.fetchMessages()
  }
  
  componentDidUpdate(prevProps) { 
   debugger
  }
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
        <MessageForm currentChannel={this.props.currentChannel} />
      </div>
    )
  }
}

export default MessageList
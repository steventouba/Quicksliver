import React from 'react'; 
import MessageForm from './message_form'; 
import MessageListItem from './message_list_item'; 

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:[...props.messages], 
    }
    this.bottom = React.createRef();
  }  

  render () {
    const { messages, currentChannel, users, currentUser } = this.props
    this.messages = []; 
    messages.map(message => {
      if ( currentChannel && parseInt(currentChannel.id) === message.channelId) {
        this.messages.push(message)
      }
    })

    return (
      <>
        {currentChannel && users && 
          <>
            <div className='main-channel-message-list'>
            <div className='message-list-header'>{currentChannel.name}</div>
            <div className='spacing-div'></div>  
            <MessageListItem messages={this.messages} users={users} /> 
            </div>
            <MessageForm currentChannel={currentChannel.id} currentUser={currentUser} />
          </>
        }
      </>
    )

  }
}

export default MessageList
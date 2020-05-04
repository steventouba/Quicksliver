import React from 'react';

class MessageListItem extends React.Component { 
  constructor(props) { 
    super(props)
  }

  StructureMessages() { 
    let messages = null; 
    let username = 'test'
    if (this.props.users && this.props.messages) { 
      messages = this.props.messages.map(message => {
        let user = this.props.users[message.authorId]; 
        if (user !== undefined) username = user.username;  
        let createdAt = message.createdAt; 
        let body = message.body; 
        return (
          <div className='message-list-item' key={message.id}>
            <span>{username}</span>
            <span>{createdAt}</span>
            <div>{body}</div>
          </div>
        )
      })
    }

    return messages 
  }


  render() { 
    debugger
    let messages = this.StructureMessages();

    return( 
      messages
    )
  }

}

export default MessageListItem; 
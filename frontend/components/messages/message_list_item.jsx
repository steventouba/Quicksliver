import React from 'react';

class MessageListItem extends React.Component { 
  constructor(props) { 
    super(props) 
    this.bottom = React.createRef()
  }
 
  componentDidUpdate() { 
    this.bottom.current.scrollIntoView()
  }

  formatDate(dateTimeString) { 
    let time = new Date(dateTimeString); 
    let hours = time.getHours(); 
    let minutes = time.getMinutes(); 
    let merides = 'AM'; 
    if (hours > 12) { 
      hours = hours - 12; 
      merides = 'PM'
    }
    let abbreviatedTime =  hours + ':' + minutes + ` ${merides}`; 
    time = time.toString()
    return [abbreviatedTime, time]; 
  }

  StructureMessages() { 
    // need to restructure broadcast method to broadcast back message object vs having to manually structure the response
    let messages = null; 
    let username = 'test'
    if (this.props.users && this.props.messages) { 
      messages = this.props.messages.map((message, idx) => {
        let user = this.props.users[message.authorId]; 
        if (user !== undefined) username = user.username;  
        let createdAt = this.formatDate(message.createdAt); 
        let body = message.body; 
        return (
          <div className='message-list-item' key={idx}>
            <span>{username}</span>
            <span>  </span>
            <span className='date-tooltip'>{createdAt[0]}
              <span className='date-tooltip-text'>
                {createdAt[1]}
              </span>
            </span> 
            <div>{body}</div>
          </div>
        )
      })
    }

    return messages 
  }


  render() { 

    let messages = this.StructureMessages();

    return( 
      <>
        {messages === null ? "" : messages}
        <div ref={this.bottom} />
      </>
    )
  }

}

export default MessageListItem; 
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
    let minutes = time.getMinutes().toString(); 
    let merides = 'AM'; 
    if (hours > 12) { 
      hours = hours - 12; 
      merides = 'PM'
    }
    if (minutes.length < 2) minutes = "0" + minutes; 

    let abbreviatedTime =  hours + ':' + minutes + ` ${merides}`; 
    time = time.toString()
    return [abbreviatedTime, time]; 
  }

  getAvatar(userId) { 
    if (userId === 8) return  <img src={window.HermesAvatar}/> ;

    const avatars = [
      <i className="far fa-user"></i>, 
      <i className="fas fa-user-tie"></i>,
      <i className="fas fa-user-astronaut"></i>,
      <i className="fas fa-user-ninja"></i>,
    ]

    let avatar = avatars[userId % avatars.length]
    return avatar
  }

  StructureMessages() { 
    // need to restructure broadcast method to broadcast back message object vs having to manually structure the response
    let messages = null; 
    let username = 'test'

    if (this.props.users && this.props.messages) { 
      messages = this.props.messages.map(message => {
        let user = this.props.users[message.authorId]; 
        if (user !== undefined) username = user.username;  
        let createdAt = this.formatDate(message.createdAt); 
        let body = message.body; 
        let avatar = this.getAvatar(message.authorId)

        return (
         <div className='message-list-item' key={message.id}>
           <span className='left-gutter-spacing'></span>
           <div className='message-avatar'> 
              {avatar}
           </div>
           <div className='message-content'>
              <span><strong>{username}</strong></span>
              {/* empty span is being used for spacing */}
              <span>  </span>
              <span className='date-tooltip'>{createdAt[0]}
                <span className='date-tooltip-text'>
                  {createdAt[1]}
                </span>
              </span>
              <div className='message-body'>{body}</div>
           </div>
         </div>
        )
      })
    }

    return messages 
  }


  render() { 

    let messages = this.StructureMessages();
    debugger
    return( 
      <>
        {
          !!messages.length ? messages 
          : <div className='no-messages'>This is the very beginning of your message history</div>
        }
        <div ref={this.bottom} />
      </>
    )
  }

}

export default MessageListItem; 

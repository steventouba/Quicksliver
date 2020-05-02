import React from 'react'; 

class MessageList extends React.Component {
  
  componentDidUpdate() {
    debugger
  }

  render () { 
    const messages = this.props.messages.map(message => (
      <div>
        {message.body}
      </div>
    ))
    
    return (
      messages
    )
  }

} 
  

export default MessageList; 
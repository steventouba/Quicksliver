import React from 'react'; 

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {messages:[...props.messages]}
    debugger
  }  

  componentWillUnmount() { 
  debugger
  }

  render () {
    const messages = this.props.messages.map(message => (
      <div key={message.id}>
        {message.body}
      </div>
    ))

    return (
      <div className='main-channel-message-list'>
        {messages}
      </div>
    )
  }
}

export default MessageList
import React from 'react'; 
import MessageForm from './message_form'; 

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:[...props.messages], 
    }
    this.bottom = React.createRef();
  }  

  componentDidMount() { 
    this.props.fetchMessages()
  }
  
  componentDidUpdate(prevProps) { 
    // debugger
  //  if (prevProps.messages && prevProps.messages.length < this.props.messages.length) { 
  //    this.setState({messages: [...this.props.messages]})
  //  }
  this.bottom.current.scrollIntoView()
  }
  // componentWillUnmount() { 
  //   null
  // }

  
  render () {
    let messages = []; 
    this.props.messages.map(message => {
      if (parseInt(this.props.currentChannel) === message.channelId) {
        messages.push(<div className ='message-list-item' key={[message.id]}>
          {message.body}
          <div ref={this.bottom}/>
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
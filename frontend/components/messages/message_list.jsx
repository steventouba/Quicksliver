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

  componentDidMount() { 
    //this.props.fetchMessages()
    //this.props.fetchUsers()
  }
  
  // componentDidUpdate(prevProps) { 
  //   debugger
  // //  if (prevProps.messages && prevProps.messages.length < this.props.messages.length) { 
  // //    this.setState({messages: [...this.props.messages]})
  // //  }
  //   if (this.props.currentChannel && this.messages.length > 0) { 
      
  //     this.bottom.current.scrollIntoView()
  //   }
  // }

  render () {
    // this.messages = []; 
    // this.props.messages.map(message => {
    //   if (parseInt(this.props.currentChannel.id) === message.channelId) {
    //     this.messages.push(<div className ='message-list-item' key={[message.id]}>
    //       {message.body}
    //       <div ref={this.bottom}/>
    //     </div>)
    //   }
    // })
    {/* {this.messages} */}

    this.messages = []; 
    this.props.messages.map(message => {
      if (parseInt(this.props.currentChannel.id) === message.channelId) {
        this.messages.push(message)
      }
    })
    return (
      <>
        {this.props.currentChannel && this.props.users && 
          <>
            <div className='main-channel-message-list'>
            <div className='message-list-header'>{this.props.currentChannel.name}</div>
            <MessageListItem messages={this.messages} users={this.props.users} /> 
            </div>
            <MessageForm currentChannel={this.props.currentChannel.id} currentUser={this.props.currentUser} />
          </>
        }
      </>
    )

  }
}

export default MessageList
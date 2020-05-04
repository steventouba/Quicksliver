import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';
import MessageList from '../messages/message_list';
import MessageForm from '../messages/message_form';
import ListenerContainer from '../listener/listener_container';
import MessageListContainer from '../messages/message_list_container';
class ChannelShow extends React.Component { 
  constructor(props) { 
    super(props) 
    //this.state = {messages: [...props.messages]};
  }

  componentDidMount () { 
    this.props.fetchUsers()
    this.props.fetchMessages()
    //this.props.fetchUserChannels(this.props.currentUser.id)
  }

  // componentDidUpdate(prevprops) { 
  //   if (prevprops.channelId !== this.props.channelId) { 
  //     this.props.fetchMessages(this.props.channelId)
  //     this.setState({messages: [...this.props.messages]})
  //   }
  // }

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'>Header</div>
        <SidenavContainer className='main-channel-sidenav' />
        {/* <MessageList  messages={this.props.messages} channelId={this.props.channelId} currentUser={this.props.currentUser} />  */}
        <MessageListContainer /> 
        {/* <MessageForm  /> */}
        <ListenerContainer /> 
      </div>
    )
  }
}

export default ChannelShow; 




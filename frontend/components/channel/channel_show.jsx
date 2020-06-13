import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';
import MessageList from '../messages/message_list';
import MessageForm from '../messages/message_form';
import ListenerContainer from '../listener/listener_container';
import MessageListContainer from '../messages/message_list_container';
import Modal from '../modal/modal'; 

class ChannelShow extends React.Component { 
  constructor(props) { 
    super(props) 
  }

  componentDidMount () { 
    const { fetchUsers, fetchMessages, currentUser } = this.props
    fetchUsers(currentUser.id)
    fetchMessages()
    //this.props.fetchUserChannels(this.props.currentUser.id)
  }

 

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'>
        </div>
        <SidenavContainer className='main-channel-sidenav' />
        {/* <MessageList  messages={this.props.messages} channelId={this.props.channelId} currentUser={this.props.currentUser} />  */}
        <MessageListContainer /> 
        {/* <MessageForm  /> */}
        <ListenerContainer /> 
        <Modal />
      </div>
    )
  }
}

export default ChannelShow; 




import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';
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
  }

 

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'>
        </div>
        <SidenavContainer className='main-channel-sidenav' />
        <MessageListContainer /> 
        <ListenerContainer /> 
        <Modal />
      </div>
    )
  }
}

export default ChannelShow; 




import React from 'react'; 
import { Link } from 'react-router-dom';

class Sidenav extends React.Component { 
  constructor(props) { 
    super(props)
    this.handleClick = this.handleClick.bind(this); 
    this.openModal = this.openModal.bind(this); 
  }

  handleClick(e) { 
    e.preventDefault; 
    this.props.logOut(); 
  }

  openModal(e) { 
    debugger
    e.preventDefault; 
    this.props.createChannel('createChannel'); 
  }

  render() { 
   const chats = this.props.chats;
    return ( 
      <div className='main-channel-sidenav'>
        <div className='sidenav-header'>
          <div className='header-dropdown-button'>
            <div className='sidenav-header-info'>
              <div className='sidenav-team-info'>Mount Olympus <strong>˅</strong></div>
              <div className='sidenav-user-info'>
                {this.props.currentUser.username}
              </div>
            </div>
            <div className='header-dropdown-content'>
              <button onClick={this.handleClick}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className='sidenav-channels'>
          <div className='channel-header'>
            {/* <span className='channel-item-gutter'></span> */}
            <div className='channels-div'>
              Channels
            </div>
            <div className='open-channel-modal'>
              <button onClick={this.openModal}><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <ChannelHeaders channels={chats.channels}  userId={this.props.currentUser.id}/> 
        </div>
        <div className='sidenav-directmessages'>
          <div className='directmessage-header'>
            {/* <span className='channel-item-gutter'></span> */}
            <div className='channels-div'>
              Direct Messages 
            </div>
            <div className='open-channel-modal'>
              <button onClick={this.openModal}><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <DirectMessageHeaders channels={chats.directMessages} userId={this.props.currentUser.id}/> 
        </div>
      </div>
    )
  }
}

const ChannelHeaders = ({channels, userId }) => { 
  let elements; 
  
  try {
    elements = channels.map(channel => (
      <Link key={channel.id} to={`/main/channels/${channel.id}`}>
        <div className='channel-item'>
          <span className='channel-item-gutter'></span>
          # {channel.name}
        </div>
      </Link>
    ))
  } catch (error) {
    elements = null
  }

  return (
    elements
  )
}

const DirectMessageHeaders = ({channels, userId }) => { 
  let elements; 

  try {
    elements = channels.map(channel => (
      <Link key={channel.id} to={`/main/channels/${channel.id}`}>
        <div className='channel-item'>
          <span className='channel-item-gutter'></span>
          {channel.name}
        </div>
      </Link>
    ))
  } catch (error) {
    elements = null
  }

  return (
    elements
  )

}



export default Sidenav; 


{/* <div className='sidenav-header'>
  <div className='header-dropdown-button'>
    <div className='sidenav-header-info'>
      <div className='sidenav-team-info'>Mount Olympus</div>
      <div className='sidenav-user-info'>
        {this.props.currentUser.username}
      </div>
    </div>
    <button
      onClick={this.handleClick}
      className='header-dropdown-content'
    >
      Logout
    </button>
  </div>
</div> */}

{/* <div className='sidenav-header'>
  <div className='header-dropdown-button'>
    {this.props.currentUser.username}
    <button
      onClick={this.handleClick}
      className='header-dropdown-content'
    >
      Logout
            </button>
  </div>
</div> */}
import React from 'react'; 
import { Link } from 'react-router-dom';

class Sidenav extends React.Component { 
  constructor(props) { 
    super(props)
    this.handleClick = this.handleClick.bind(this); 
    this.openModal = this.openModal.bind(this); 
    this.toggleActive = this.toggleActive.bind(this);
  }

  handleClick(e) { 
    e.preventDefault; 
    this.props.logOut(); 
  }
  
  openModal(e) { 
    e.preventDefault; 
    this.props.createChannel('createChannel'); 
  }

  toggleActive() {
    const currentActive = document.getElementsByClassName('active-channel')
    currentActive[0] ? currentActive[0].classList.remove('active-channel') : null;
    event.target.parentElement.classList.add('active-channel')
  }

  render() { 
   const { chats, history, createChannel } = this.props;
    return ( 
      <div className='main-channel-sidenav'>
        <div className='sidenav-header'>
          <div className='header-dropdown-button'>
            <div className='sidenav-header-info'>
              <div className='sidenav-team-info'><strong>Mount Olympus ˅</strong></div>
              <div className='sidenav-user-info'>
                {this.props.currentUser.username}
              </div>
            </div>
            <button className='header-dropdown-content' onClick={this.handleClick}>
              Logout
            </button>
          </div>
        </div>
        <div className='sidenav-channels'>
          <div className='channel-header'>
            <div className='channels-div'>
              Channels
            </div>
            <div className='open-channel-modal'>
              <button onClick={() => createChannel('createChannel')}><i className="fas fa-plus"></i></button>
            </div>
          </div>
          <ChannelHeaders deleteChannel={this.props.deleteChannel} 
            toggleActive={this.toggleActive}
            channels={chats.channels}
            history={history}
          /> 
        </div>
        <div className='sidenav-directmessages'>
          <div className='directmessage-header'>
            {/* <span className='channel-item-gutter'></span> */}
            <div className='channels-div'>
              Direct Messages 
            </div>
            <div className='open-channel-modal'>
              <button onClick={() => createChannel('createDirectMessage')}><i className="fas fa-plus"></i></button>
            </div>
          </div>
          <DirectMessageHeaders  deleteChannel={this.props.deleteChannel}
            toggleActive={this.toggleActive}
            channels={chats.directMessages}
            history={history}
          /> 
        </div>
      </div>
    )
  }
}

const ChannelHeaders = ({ channels, deleteChannel, history, toggleActive }) => { 
  let elements; 
  
  try {
    elements = channels.map(channel => (
      <Link key={channel.id} to={`/main/channels/${channel.id}`} onClick={toggleActive}>
        <div className="channel-item">
          <span className='channel-tooltip-text'>{channel.name}</span>
          <span># {channel.name}</span>
          {(channel.id !== 1 && channel.id !== 2) && 
         <div onClick={() => deleteChannel(channel.id)
          .then(() => history.push('/main/channels/1'))}>X</div>}
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

const DirectMessageHeaders = ({ channels, deleteChannel, history, toggleActive }) => { 
  let elements; 

  try {
    elements = channels.map(channel => (
      <Link key={channel.id} to={`/main/channels/${channel.id}`} onClick={toggleActive}>
        <div className='channel-item'>
          <span className='channel-tooltip-text'>{channel.name}</span>
          <span>{channel.name} </span>
          <div onClick={() => deleteChannel(channel.id)
            .then(() => history.push('/main/channels/1'))}>X</div>
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

import React from 'react'; 
import { Link } from 'react-router-dom';



class Sidenav extends React.Component { 
  constructor(props) { 
    super(props)
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(e) { 
    e.preventDefault; 
    this.props.logOut(); 
  }

  componentDidMount() { 
    this.props.fetchUserChannels(this.props.currentUser.id)
  }

  render() { 
   const chats = this.props.chats;
    return ( 
      <div className='main-channel-sidenav'>
        <div className='sidenav-header'>
          <button onClick={this.handleClick}>Logout</button>
        </div>
        <div className='sidenav-channels'>
          <Headers channels={chats.channels}  userId={this.props.currentUser.id}/> 
        </div>
        <div className='sidenav-directmessages'>
          <Headers channels={chats.directMessages} userId={this.props.currentUser.id}/> 
        </div>
      </div>
    )
  }
}

const Headers = ({channels, userId }) => { 
  let elements; 
  
  try {
    elements = channels.map(channel => (
      <Link key={channel.id} to={`/main/${userId}/${channel.id}`}>
        <div>
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
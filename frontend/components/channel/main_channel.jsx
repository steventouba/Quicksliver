import React from 'react'; 
import Sidenav from '../sidenav/sidenav'; 

class MainChannel extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'></div>
        <Sidenav logOut={this.props.logOut} channels={this.props.channels} />
        {/* <div className='main-channel-sidenav'></div> */}
        <div className='main-channel-message-box'></div>
        <div className='main-channel-profile-box'></div>
        <div className='main-channel-message-field'></div>


      </div>
    
    )
  }
}


export default MainChannel; 
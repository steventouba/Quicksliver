import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container'

class MainChannel extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'></div>
        <SidenavContainer />
        <div className='main-channel-message-box'></div>
        <div className='main-channel-profile-box'></div>
        <div className='main-channel-message-field'></div>


      </div>
    
    )
  }
}


export default MainChannel; 
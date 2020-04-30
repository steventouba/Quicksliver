import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container'
import MainChannelShow from './main_channel_show';

const Test = () => { 
  return (
    <div className='main-channel-container'>
      <h1>This a test</h1>
      <div className='main-channel-header'></div>
      <SidenavContainer />
      <MainChannelShow />
      <div className='main-channel-profile-box'></div>
      <div className='main-channel-message-field'></div>
    </div>

  )
}

export default Test;
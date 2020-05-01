import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';


class MainChannelShow extends React.Component { 
  // constructor(props){ 
  //   super(props)
  //   this.state = this.props.messages ;
  //   debugger
  // }


  render() { 
    return(
      <RenderMessages fetchMessages={this.props.fetchMessages} channelId={this.props.channelId} /> 
    )
  }
}; 

const RenderMessages = (props) => {   
  //let messages = props.fetchMessages(props.channelId)
  return(
    <div className='main-channel-container'>
      <div className='main-channel-header'></div>
      <SidenavContainer />
  <div className='main-channel-profile-box'>Test{props.channelId}</div>
      <div className='main-channel-message-field'></div>
    </div>
  )

}

export default RenderMessages; 


import React from 'react'; 
import { withRouter } from 'react-router-dom';

class MainChannelShow extends React.Component { 
  constructor(props){ 
    super(props)
    debugger
  }


  render() { 

    return(
      <div className='main-channel-message-box'>Hello from Main Show</div>
    )
  }
}; 

export default withRouter(MainChannelShow); 


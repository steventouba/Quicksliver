import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';
import MessageList from '../messages/message_list';

class ChannelShow extends React.Component { 
  constructor(props) { 
    super(props) 
    debugger
  }

  componentDidMount () { 
    this.props.fetchMessages(this.props.channelId)
  }

  componentDidUpdate(prevprops) { 
    if (prevprops.channelId !== this.props.channelId) { 
      this.props.fetchMessages(this.props.channelId)
    }
  }

  render() { 
    return (
      <div>
        <SidenavContainer />
        <MessageList messages={this.props.messages} /> 
      </div>
    )
  }
}

export default ChannelShow; 




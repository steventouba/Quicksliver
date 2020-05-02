import React from 'react'; 
import SidenavContainer from '../sidenav/sidenav_container';
import MessageList from '../messages/message_list';

class ChannelShow extends React.Component { 
  constructor(props) { 
    super(props) 
    this.state = {...props.messages};
  }

  componentDidMount () { 
    this.props.fetchMessages(this.props.channelId)
  }

  componentDidUpdate(prevprops) { 
    if (prevprops.channelId !== this.props.channelId) { 
      this.props.fetchMessages(this.props.channelId)
      this.setState({...this.props.messages})
    }
  }

  render() { 
    return (
      <div className='main-channel-container'>
        <div className='main-channel-header'>Header</div>
        <SidenavContainer className='main-channel-sidenav' />
        <MessageList  messages={this.props.messages} /> 
        <div className='main-channel-message-input'>message input</div>
      </div>
    )
  }
}

export default ChannelShow; 




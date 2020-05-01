import { connect } from "react-redux";
import React from 'react';
import MainChannelShow from "./main_channel_show";
import { fetchMessages } from "../../actions/message_actions";


const mapStateToProps = (state, ownProps) => { 
  return {
    channelId: ownProps.match.params.channelId, 
    messages: state.entities.messages
  }
}; 

const mapDispatchToProps = (dispatch) => {

  return {
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
  }
}


class GetChannelId extends React.Component { 

  componentDidMount () { 
    this.props.fetchMessages(this.props.channelId)
  }

  render () { 
    const {messages, channelId, fetchMessages} = this.props

  
    return ( 
      <MainChannelShow
        messages={messages}
        channelId={channelId}
        fetchMessages={fetchMessages}
      />
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetChannelId); 
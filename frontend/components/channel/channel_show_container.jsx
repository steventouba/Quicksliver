import { connect } from "react-redux";
import React from 'react';
import ChannelShow from "./channel_show";
import { fetchMessages } from "../../actions/message_actions";
import { fetchUserChannels } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => { 

  return {
    channelId: ownProps.match.params.channelId, 
    channels: state.entities.channels,
    currentUser: state.session.currentUser
  }
}; 

const mapDispatchToProps = (dispatch) => {

  return {
    fetchMessages: () => dispatch(fetchMessages()), 
    fetchUserChannels: (currentUserId) => fetchUserChannels(currentUserId)
  }
}

// class GetMessages extends React.Component { 
  
//   ShouldcomponentUpdate(nextProps, nextState) { 
//     debugger 
//     this.props.fetchMessages(this.props.channelId)
//   }

//   render() { 
//     return (
//       <ChannelShow 
//         messages={this.props.messages}
//         fetchMessages={this.props.fetchMessages}
//         channelId={this.props.channelId}
//       />
//     )
//   }
// }


export default connect(mapStateToProps,mapDispatchToProps)(ChannelShow); 
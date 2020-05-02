import { connect } from "react-redux";
import React from 'react';
import ChannelShow from "./channel_show";
import { fetchMessages } from "../../actions/message_actions";


const mapStateToProps = (state, ownProps) => { 

  return {
    channelId: ownProps.match.params.channelId, 
    messages: Object.values(state.entities.messages)
  }
}; 

const mapDispatchToProps = (dispatch) => {

  return {
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
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
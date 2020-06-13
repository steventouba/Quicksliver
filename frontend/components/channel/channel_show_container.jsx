import { connect } from "react-redux";
import React from 'react';
import ChannelShow from "./channel_show";
import { fetchMessages } from "../../actions/message_actions";
import { fetchUserChannels } from "../../actions/channel_actions";
import { fetchUsers } from "../../actions/user_actions";

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
    fetchUserChannels: (currentUserId) => fetchUserChannels(currentUserId), 
    fetchUsers: (currentUserId) => dispatch(fetchUsers(currentUserId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ChannelShow); 
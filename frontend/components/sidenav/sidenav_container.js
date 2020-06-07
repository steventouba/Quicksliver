import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import Sidenav from './sidenav'; 
import chatsSelector from "../../reducers/chats_selector";
import {openModal} from '../../actions/modal_actions'
import { deleteChannel } from "../../actions/channel_actions";

const mapStateToProps = (state) => {
  const { currentUser } = state.session
  const { channels, users } = state.entities
  return {
    chats: chatsSelector(channels, users, currentUser), 
    currentUser
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    createChannel: (formAction) => dispatch(openModal(formAction)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(Sidenav); 

// fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId)), 
// fetchChannelMemberships: (userId) => dispatch(fetchChannelMemberships(userId))
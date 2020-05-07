import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import Sidenav from './sidenav'; 
import chatsSelector from "../../reducers/chats_selector";
import {openModal} from '../../actions/modal_actions'
// import { fetchUserChannels } from "../../actions/channel_actions";
// import { fetchChannelMemberships } from "../../actions/channel_memberships_actions";

const mapStateToProps = (state) => {
  return {
    chats: chatsSelector(state.entities.channels), 
    currentUser: state.session.currentUser
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    createChannel: (formAction) => dispatch(openModal(formAction))
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(Sidenav); 

// fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId)), 
// fetchChannelMemberships: (userId) => dispatch(fetchChannelMemberships(userId))
import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import Sidenav from './sidenav'; 
import chatsSelector from "../../reducers/chats_selector";
import { fetchUserChannels } from "../../actions/channel_actions";

const mapStateToProps = (state) => {
  return {
    chats: chatsSelector(state.entities.channels), 
    currentUser: state.session.currentUser
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()), 
    fetchUserChannels: () => dispatch(fetchUserChannels())
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(Sidenav); 

import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import MainChannel from "./main_channel";
import chatsSelector from "../../reducers/chats_selector";

const mapStateToProps = ({entities}) => {
  return {
    chats: chatsSelector(entities.channels)
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(MainChannel); 

import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import MainChannel from "./main_channel";

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, MapDispatchToProps)(MainChannel); 
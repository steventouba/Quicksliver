import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import MainChannel from "./main_channel";

const mapStateToProps = ({entities}) => ({
  
  channels: Object.values(entities.channels)
});

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(MainChannel); 
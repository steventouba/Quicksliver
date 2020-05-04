import { connect } from "react-redux";
import { fetchMessages } from '../../actions/message_actions';
import MessageList from "./message_list";
import { withRouter } from "react-router-dom";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages) || undefined, 
    users: state.entities.users || undefined, 
    currentChannel: state.entities.channels[ownProps.match.params.channelId], 
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => { 

  return{
    fetchMessages: () => dispatch(fetchMessages())
    //fetchUsers: () => dispatch(fetchUsers())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList))


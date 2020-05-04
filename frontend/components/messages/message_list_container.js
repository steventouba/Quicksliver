import { connect } from "react-redux";
import { fetchMessages } from '../../actions/message_actions';
import MessageList from "./message_list";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages) || undefined, 
    currentChannel: ownProps.match.params.channelId, 
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => { 

  return{
    fetchMessages: () => dispatch(fetchMessages())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList))


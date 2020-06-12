import { RECEIVE_CHANNEL_ERRORS } from '../actions/channel_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const channelErrors = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      debugger
      return action.errors
    case CLEAR_ERRORS: 
      return []; 
    default:
      return state; 
  }
}

export default channelErrors; 
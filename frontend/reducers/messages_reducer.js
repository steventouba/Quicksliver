import { 
  RECEIVE_MESSAGES, 
  RECEIVE_MESSAGE 
} from "../actions/message_actions";

const messagesReducer = (state={}, action) => {
  Object.freeze(state); 
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return {...action.messages}
    case RECEIVE_MESSAGE: 
      return {...state, ...action.message}
    default:
      return state; 
  }
}


export default messagesReducer; 
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const channelsReducer = (state={}, action) => { 
  Object.freeze(state); 
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {...action.user.channels}
    default:
      return state; 
  }
}

export default channelsReducer; 
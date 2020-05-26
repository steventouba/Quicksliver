import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { 
  RECEIVE_CHANNELS, 
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
 } from "../actions/channel_actions";


const channelsReducer = (state={}, action) => { 
  debugger
  Object.freeze(state); 
  
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return {...action.channels};
    case RECEIVE_CHANNEL:
      return {...state, [action.channel.id]: action.channel};
    case REMOVE_CHANNEL: 
      delete state[action.channel.id]
      return state;
    case RECEIVE_CURRENT_USER: 
      return action.user.channels
    default:
      return state; 
  }
}

export default channelsReducer; 

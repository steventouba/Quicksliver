import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_CHANNEL_MEMBERSHIPS} from '../actions/channel_memberships_actions';


const channelMembershipsReducer = (state={}, action) => { 
  Object.freeze(state); 
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.memberships
    case RECEIVE_CHANNEL_MEMBERSHIPS:
      return action.memberships
    default:
      return state; 
  }
}

export default channelMembershipsReducer; 

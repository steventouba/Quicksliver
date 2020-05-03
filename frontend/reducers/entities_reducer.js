import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import channelMembershipsReducer from './channel_memberships_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer, 
  channels: channelsReducer, 
  messages: messagesReducer, 
  memberships: channelMembershipsReducer
}); 

export default entitiesReducer; 
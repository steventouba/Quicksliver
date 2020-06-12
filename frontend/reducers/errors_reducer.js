import { combineReducers } from "redux";
import sessionsErrorsReducer from './session_errors_reducer'; 
import channelErrorsReducer from './channels_errors_reducer';

const errorsReducer = combineReducers({ 
  session: sessionsErrorsReducer, 
  channels: channelErrorsReducer,
}); 

export default errorsReducer
import {
  postUser, 
  postSession, 
  deleteSession,
  demoUser
} from '../utils/session_utils'; 


 //create const for reducers to throw error 
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

//user action creater 
const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER, 
  user 
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS, 
  errors 
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


// dispatch is received from thunk middleware
export const createNewUser = (formUser) => dispatch => postUser(formUser)
  .then(
    user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logIn = (formUser) => dispatch => postSession(formUser)
  .then(
    user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const demoLogIn = () => dispatch => demoUser()
  .then(
    user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logOut = () => dispatch => deleteSession()
  .then(
    () => dispatch(logoutCurrentUser()), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  ); 
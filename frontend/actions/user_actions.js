import * as UserUtils from '../utils/user_utils'; 

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = (users) => ({
  type: RECEIVE_USERS, 
  users
}); 


export const fetchUsers = () => dispatch => UserUtils.fetchUsers()
  .then((users) => dispatch(receiveUsers(users)))

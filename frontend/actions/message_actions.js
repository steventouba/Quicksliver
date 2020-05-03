import * as MessageUtils from "../utils/message_utils";

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'; 
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'; 

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES, 
  messages
}); 

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE, 
  message
}); 


export const fetchMessages = (channelId) => dispatch => MessageUtils.fetchMessages(channelId)
  .then(
    (messages) => dispatch(receiveMessages(messages)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
import * as MessageUtils from "../utils/message_utils";

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'; 

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES, 
  messages
}); 


export const fetchMessages = (channelId) => dispatch => MessageUtils.fetchMessages(channelId)
  .then(
    (messages) => dispatch(receiveMessages(messages)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
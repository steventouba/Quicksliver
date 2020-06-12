import * as ChannelUtils from '../utils/channel_utils'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'; 
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'; 
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'; 
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS'; 

const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS, 
  channels
}); 

const receiveChannel = (channel) => ({ 
  type: RECEIVE_CHANNEL, 
  channel
}); 

const removeChannel = (channel) => ({
    type: REMOVE_CHANNEL, 
    channel
});

const receiveChannelErrors = (errors) => {
  debugger
  return {type: RECEIVE_CHANNEL_ERRORS, 
  errors}
}


export const fetchUserChannels = () => dispatch => ChannelUtils.fetchUserChannels()
  .then(
    channels => dispatch(receiveChannels(channels)), 
    console.log
  )

export const createChannel = (payload) => dispatch => ChannelUtils.createChannel(payload)
  .then(
    channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveChannelErrors(err.responseJSON))
  )

export const deleteChannel = (channelId) => dispatch => ChannelUtils.deleteChannel(channelId)
    .then(
      channel => dispatch(removeChannel(channel)), 
      console.log
    )
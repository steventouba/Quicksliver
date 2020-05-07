import * as ChannelUtils from '../utils/channel_utils'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'; 
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'; 

const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS, 
  channels
}); 

const receiveChannel = (channel) => ({ 
  type: RECEIVE_CHANNEL, 
  channel
}); 



export const fetchUserChannels = () => dispatch => ChannelUtils.fetchUserChannels()
  .then(
    channels => dispatch(receiveChannels(channels)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const createChannel = (payload) => dispatch => ChannelUtils.createChannel(payload)
  .then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )

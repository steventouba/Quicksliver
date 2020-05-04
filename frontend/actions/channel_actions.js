import * as ChannelUtils from '../utils/channel_utils'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'; 


const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS, 
  channels
}); 



export const fetchUserChannels = () => dispatch => ChannelUtils.fetchUserChannels()
  .then(
    channels => dispatch(receiveChannels(channels)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
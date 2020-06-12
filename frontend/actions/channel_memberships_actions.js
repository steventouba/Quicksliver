import * as membershipUtils from '../utils/channel_memberships_utils'; 
export const RECEIVE_CHANNEL_MEMBERSHIPS = 'RECEIVE_CHANNEL_MEMBERSHIPS'

const receiveChannelMemberships = (memberships) => ({ 
  type: RECEIVE_CHANNEL_MEMBERSHIPS, 
  memberships
})

export const fetchChannelMemberships = (userId) => dispatch => (
  membershipUtils.fetchUserMemberships(userId)
).then(
  (memberships) => dispatch(receiveChannelMemberships(memberships)),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
)
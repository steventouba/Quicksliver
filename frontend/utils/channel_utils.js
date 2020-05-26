
export const fetchUserChannels = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/channels`, 
    method: 'GET'
  })
)

export const createChannel = (payload) => (
  $.ajax({
    url: `/api/channels`, 
    method: 'POST',
    data: {channel: payload}
  })
)

export const deleteChannel = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}`, 
    method: 'DELETE',
  })
)

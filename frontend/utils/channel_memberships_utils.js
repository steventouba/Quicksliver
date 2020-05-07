export const fetchUserMemberships = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/channelmemberships`,
    method: 'GET'
  }))

export const fetchChannelMembership = (ChannelId) => (
  $.ajax({
    url: `/api/users/channelmemberships`,
    method: 'GET'
  }))

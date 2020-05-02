
export const fetchUserChannels = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/channels`, 
    method: 'GET'
  })
)



export const fetchMessages = (channelId) => (
  $.ajax({
    url: `api/channels/${channelId}/messages`, 
    method: 'GET'
  })
); 
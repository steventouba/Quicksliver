

export const fetchMessages = () => (
  $.ajax({
    url: `api/messages`, 
    method: 'GET'
  })
); 
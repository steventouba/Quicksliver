export const fetchUsers = (currentUserId) => (
  $.ajax({ 
    url: '/api/users', 
    method: 'GET', 
    data: { currentUserId }
  })
)

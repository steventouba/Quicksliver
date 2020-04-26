// creates a new user 
export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'Post', 
    data: { user }
  })
)

//post request to login user or create new session 
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'Post',
    data: { user }
  })
)

//delete request to logout user/destroy session 
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)


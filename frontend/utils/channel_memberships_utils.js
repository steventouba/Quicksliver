export const fetchUserMemberships = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/channelmemberships`,
    method: 'GET'
  }))

export const signup = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    success,
    error
  })
);

export const login = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
    success,
    error
  })
);

export const logout = (success, error) => {
    // debugger
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    success,
    error
  })
}

export const updateUser = (user, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user },
    success,
    error
  });
}

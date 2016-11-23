export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const OPEN_MODAL = "OPEN_MODAL";

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => {
  // debugger
  return ({
    type: LOGOUT
  });
};

export const signup = user => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const openModal = bool => ({
  type: OPEN_MODAL,
  bool
});

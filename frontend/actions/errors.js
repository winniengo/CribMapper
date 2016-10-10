export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
// export const ADD_ERRORS = 'ADD_ERRORS';

export const receiveErrors = (etype, errors) => ({
  type: RECEIVE_ERRORS,
  etype,
  errors
});

export const clearErrors = etype => ({
  type: CLEAR_ERRORS,
  etype
});

// export const addErrors = (etype, errors) => ({
//   type: ADD_ERRORS,
//   etype,
//   errors
// });

export const ADD_ALERT = "ADD_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

export const addAlert = alert => ({
  type: ADD_ALERT,
  alert
});

export const clearAlert = () => ({
  type: CLEAR_ALERT
})

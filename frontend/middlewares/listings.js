const listingsMiddleware = store => next => action => {
  const error = e => console.log(e);
  let success;

  switch(action.type) {
    default:
      return next(action);
  }
};

export default listingsMiddleware;

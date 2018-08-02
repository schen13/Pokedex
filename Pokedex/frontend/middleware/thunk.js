const thunk = ({ dispatch, getState }) => next => action => {
  console.log(next);
  console.log(action);
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export default thunk;

// what is the next function
// what is the action function
// where does this thunk function get called


mapDispatchToProps

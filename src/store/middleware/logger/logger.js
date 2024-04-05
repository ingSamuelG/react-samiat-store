const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    next(action);
  }

  console.log("Type: ", action.type);
  console.log("Payload: ", action.payload);
  console.log("Prev state:", store.getState());

  next(action);

  console.log("Next state: ", store.getState());
};

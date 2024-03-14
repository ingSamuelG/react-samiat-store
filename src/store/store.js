import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

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

const middleWares = [customLogger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

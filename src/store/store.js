// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";
// import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { rootSaga } from "./root.saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// const sagaMiddleware = createSagaMiddleware();

const persitedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  // sagaMiddleware,
].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persitedReducer, undefined, composedEnhancers);

export const store = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middleWares),
});

export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

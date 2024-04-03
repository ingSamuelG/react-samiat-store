import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_USER_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SING_OUT_USER_SUCCESS);

export const signOutFailed = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_USER_FAILED);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, user);

export const signUpStart = (form) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, form);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FALIED, error);

// Error: put(action): argument action is undefined
// at check (http://localhost:3000/static/js/bundle.js:41560:11)
// at put (http://localhost:3000/static/js/bundle.js:41927:7)
// at getSnapshotFromUserAuth (http://localhost:3000/static/js/bundle.js:5506:66)
// at getSnapshotFromUserAuth.next (<anonymous>)
// at next (http://localhost:3000/static/js/bundle.js:43174:29)
// at currCb (http://localhost:3000/static/js/bundle.js:43258:7)

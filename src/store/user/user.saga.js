import { all, takeLatest, put, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signUpSuccess,
  checkUserSession,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  singInWithGooglePopUp,
  signOutUser,
  signInUserWithEmailandPassword,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnap = yield call(createUserDocumentFromAuth, userAuth);
    yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuht() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) {
      yield put(signOutSuccess());
    } else {
      yield call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* logWithGoogleUser() {
  try {
    yield call(singInWithGooglePopUp);
    yield put(checkUserSession(isUserAuht));
  } catch (error) {
    if (
      error.code === "auth/cancelled-popup-request" ||
      error.code === "auth/popup-closed-by-user"
    ) {
      return;
    } else {
      yield put(signInFailed(error));
    }
  }
}

export function* sigOutUser() {
  try {
    yield call(signOutUser);
    yield put(checkUserSession(isUserAuht));
  } catch (error) {}
}

export function* logInWithEmail(action) {
  try {
    const { email, password } = action.payload;
    const { user } = yield call(
      signInUserWithEmailandPassword,
      email,
      password
    );
    yield put(checkUserSession(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* singUp(action) {
  try {
    const { displayname, email, password, confirmPassword } = action.payload;
    if (password === confirmPassword) {
      const authUser = yield call(
        createAuthUserWithEmailAndPassword,
        displayname,
        email,
        password
      );

      yield put(signUpSuccess(authUser));
    } else {
      const error = new Error("The passwords dosnt match");
      yield put(signInFailed(error));
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInAfterSignUp(action) {
  const userAuth = action.payload;
  yield call(getSnapshotFromUserAuth, userAuth);
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER_START, sigOutUser);
}

export function* onSignInWithGoogle() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, logWithGoogleUser);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuht);
}

export function* onSignInWithEmail() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, logInWithEmail);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, singUp);
}
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithGoogle),
    call(onSignOut),
    call(onSignInWithEmail),
    call(onSignUp),
    call(onSignUpSuccess),
  ]);
}

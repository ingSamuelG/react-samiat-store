// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe7jZ_R_EEgtp7aDWvn4r4wlj5zmyAKgk",
  authDomain: "samiat-test-db.firebaseapp.com",
  projectId: "samiat-test-db",
  storageBucket: "samiat-test-db.appspot.com",
  messagingSenderId: "864795528880",
  appId: "1:864795528880:web:0857a03093ba4613e33575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating a user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  displayName,
  email,
  password
) => {
  if (!email || !password) return;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  // console.log(user)

  const newUser = { ...user, displayName };
  return newUser;
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const signInUserWithEmailandPassword = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);
  return user;
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

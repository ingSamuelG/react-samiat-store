import { useEffect } from "react";
import {
  // auth,
  singInWithGooglePopUp,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";
import SingUpForm from "../sign-up-form/sign-up-form.component";
// import { getRedirectResult } from "firebase/auth";

function SingIn() {
  //   useEffect(() => {
  //     const getResutls = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = createUserDocumentFromAuth(response.user);
  //       }
  //       console.log(response);
  //     };

  //     getResutls();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sing In</h1>
      <button onClick={logGoogleUser}>Sing with google Pop up</button>
      <SingUpForm />
    </div>
  );
}

export default SingIn;

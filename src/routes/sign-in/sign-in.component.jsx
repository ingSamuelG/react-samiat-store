import { useEffect } from "react";
import {
  // auth,
  singInWithGooglePopUp,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";
import SingUpForm from "../sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

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
    <div className="sign-up-container">
      <h2>Don't' have an account</h2>
      <SingUpForm />
      <Button buttonType="google" onClick={logGoogleUser}>
        Sing with google Pop up
      </Button>
    </div>
  );
}

export default SingIn;

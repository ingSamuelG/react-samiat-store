import React from "react";
import FormInput from "../form-input/form-input.component";
import {
  // auth,
  singInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInUserWithEmailandPassword,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";
// import { getRedirectResult } from "firebase/auth";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { UserCtx } from "../../context/user.context";

export default function SignInForm() {
  /// To use with google redirect instead of the pop up
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

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const { setCurrentUser } = useContext(UserCtx);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await singInWithGooglePopUp();
      createUserDocumentFromAuth(user);
      console.log(user);
      setCurrentUser(user);
    } catch (error) {
      if (
        error.code === "auth/cancelled-popup-request" ||
        error.code === "auth/popup-closed-by-user"
      ) {
        console.log(error.message);
      } else {
        alert(error.message);
      }
    }
  };

  const [form, setForm] = useState(defaultFormFields);
  const { email, password } = form;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const user = await signInUserWithEmailandPassword(email, password);
        setCurrentUser(user);
        setForm(defaultFormFields);
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          alert("password or user is invalid");
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <div className="group">
        <span>Sing up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email:"
            key="email-sign-in"
            type="email"
            className="form-input"
            name="email"
            id="email-sign-in"
            required
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="Password:"
            key="password-sign-in"
            type="password"
            className="form-input"
            name="password"
            id="password-sign-in"
            required
            onChange={handleChange}
            value={password}
          />
          <div className="button-group">
            <Button type="submit">Sign in</Button>
            <Button type="button" buttonType="google" onClick={logGoogleUser}>
              Sing with google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

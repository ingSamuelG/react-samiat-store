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
import { useState } from "react";

const handleSubmit = () => {};

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  const [form, setForm] = useState(defaultFormFields);
  const { email, password } = form;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      await signInUserWithEmailandPassword(email, password);
      setForm(defaultFormFields);
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
            key={`${email}-sign-in`}
            type="email"
            className="form-input"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="Password:"
            key={`${password}-sign-in`}
            type="password"
            className="form-input"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={password}
          />
          <div className="button-group">
            <Button type="submit">Sign in</Button>
            <Button buttonType="google" onClick={logGoogleUser}>
              Sing with google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { React, useEffect, useState } from "react";
import { SignUpContainer } from "./sign-up.style.jsx";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util.js";
import { setCurrentUser } from "../../store/user/user.reducer.js";

function SingUpForm() {
  const defaultFormFields = {
    displayname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const resetFormFields = () => {
    setForm(defaultFormFields);
  };
  const [form, setForm] = useState(defaultFormFields);
  const [hiddeButton, sethiddeButton] = useState(true);
  const { displayname, email, password, confirmPassword } = form;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authUser = await createAuthUserWithEmailAndPassword(
      displayname,
      email,
      password
    );
    const userSnap = await createUserDocumentFromAuth(authUser);
    setCurrentUser(userSnap);
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (password === confirmPassword) {
      sethiddeButton(false);
    } else {
      sethiddeButton(true);
    }
  }, [form, confirmPassword, password]);

  return (
    <SignUpContainer>
      <h2>I do not have a account</h2>

      <div className="group">
        <span>Sing up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name:"
            className="form-input"
            id="displayname"
            name="displayname"
            type="text"
            onChange={handleChange}
            value={displayname}
            required
          />
          <FormInput
            label="Email:"
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
            type="password"
            className="form-input"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={password}
          />
          <FormInput
            label="Confirm password:"
            type="password"
            className="form-input"
            name="confirmPassword"
            id="confirmPassword"
            required
            onChange={handleChange}
            value={confirmPassword}
          />
          {!(password === "") ? (
            hiddeButton ? (
              <p style={{ color: "red" }}>Does not match</p>
            ) : (
              <p style={{ color: "green" }}>Matching ...</p>
            )
          ) : null}
          <Button
            disabled={hiddeButton}
            type="submit"
            buttonType={BUTTON_TYPE_CLASSES.base}
          >
            Sign up
          </Button>
        </form>
      </div>
    </SignUpContainer>
  );
}

export default SingUpForm;

import { React, useEffect, useState } from "react";
import { SignUpContainer } from "./sign-up.style.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const getUser = async () => {
      try {
        const res = await createAuthUserWithEmailAndPassword(
          displayname,
          email,
          password
        );
        createUserDocumentFromAuth(res);
        resetFormFields();
      } catch (error) {
        alert(`Error:${error.message}`);
      }
    };

    if (password === confirmPassword) {
      getUser();
    }
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

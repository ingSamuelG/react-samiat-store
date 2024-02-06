import { React, useEffect, useState } from "react";
import "./sign-up.style.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

function SingUpForm() {
  const defaultFormFields = {
    displayname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div>
      <h1>Sing up with you email and password</h1>

      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="displayname">Display Name:</label>
        <input
          type="text"
          name="displayname"
          id="displayname"
          onChange={handleChange}
          required
          value={displayname}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          value={password}
        />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type="password"
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
        <button disabled={hiddeButton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SingUpForm;

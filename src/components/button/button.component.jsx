import React from "react";
import {
  BaseButton,
  GoogleSingInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

function Button({ children, buttonType, isLoading, ...otherProps }) {
  const ButtonToRender = getButton(buttonType);

  return (
    <ButtonToRender disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonToRender>
  );
}

export default Button;

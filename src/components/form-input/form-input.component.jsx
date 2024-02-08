import React from "react";
import "./form-input-style.scss";

function FormInput({ label, ...otherProps }) {
  const { id } = otherProps;

  return (
    <div className="group">
      <input {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length > 0 ? " shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;

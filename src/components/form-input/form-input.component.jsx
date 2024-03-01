import React from "react";
import { Group, Input, FormInputLabel } from "./form-input.style.jsx";

function FormInput({ label, ...otherProps }) {
  const { id } = otherProps;

  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={id} shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;

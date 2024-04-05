import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import React from "react";
import { PaymentFormContainer, FormContainer } from "./payment.style";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("./netlify/functions/create-pyament-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());
    console.log(response);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

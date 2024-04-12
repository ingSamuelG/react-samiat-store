import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import React, { useState, useEffect } from "react";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment.style";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import { createPayment } from "../../store/payment/payment.reducer";
import { selectIsPaymentLoading } from "../../store/payment/payment.selector";

export const PaymentForm = () => {
  const user = useSelector(selectCurrentUser);
  const cartTotal = useSelector(selectCartTotal);
  const isPaymentLoading = useSelector(selectIsPaymentLoading);
  const dispatch = useDispatch();

  const defaultFormFields = {
    name: "",
    email: "",
  };
  const stripe = useStripe();
  const elements = useElements();

  const [form, setForm] = useState(defaultFormFields);

  useEffect(() => {
    if (user) {
      setForm({ name: user.displayName, email: user.email });
    }
  }, [user]);

  const { name, email } = form;

  const handleInputChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    dispatch(
      createPayment({
        cartTotal,
        name,
        email,
        stripe,
        elements,
        cardElement: CardElement,
      })
    );
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        {!user && (
          <>
            <FormInput
              label="Name"
              id="name"
              type="text"
              onChange={handleInputChange}
              value={name}
            />
            <FormInput
              label="Email"
              id="email"
              type="email"
              onChange={handleInputChange}
              value={email}
            />
          </>
        )}
        <CardElement />
        <PaymentButton
          isLoading={isPaymentLoading}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

import React, { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartCtx } from "../../context/cart.context";
import "./checkout.style.scss";

const CheckOut = () => {
  const {
    cart: { cartItems },
    calculateCartTotal,
  } = useContext(CartCtx);

  return cartItems.length === 0 ? (
    <h2>How lonley add something to the card </h2>
  ) : (
    <div className="checkout-items-container">
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div className="total-container">
        <h2>Total</h2>
        <span>{calculateCartTotal(cartItems)}</span>
      </div>
    </div>
  );
};

export default CheckOut;

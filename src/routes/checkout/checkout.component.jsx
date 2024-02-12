import React, { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartCtx } from "../../context/cart.context";
import "./checkout.style.scss";

const CheckOut = () => {
  const {
    cart: { cartItems },
  } = useContext(CartCtx);

  return (
    <div className="checkout-items-container">
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CheckOut;

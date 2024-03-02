import React, { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartCtx } from "../../context/cart.context";
import "./checkout.style.scss";

const CheckOut = () => {
  const {
    cart: { cartItems },
    calculateCartTotal,
  } = useContext(CartCtx);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <h2>How lonley add something to the card </h2>
      ) : (
        <>
          {cartItems.map((item) => {
            return <CheckOutItem key={item.id} item={item} />;
          })}
          <div className="total-container">
            <h2>Total</h2>
            <span>{calculateCartTotal(cartItems)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;

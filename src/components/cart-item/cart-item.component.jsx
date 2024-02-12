import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { title, thumbnail, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={thumbnail} alt={title} />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

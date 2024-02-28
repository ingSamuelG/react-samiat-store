import React from "react";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
} from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { title, thumbnail, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={thumbnail} alt={title} />
      <ItemDetails>
        <ItemName className="name">{title}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

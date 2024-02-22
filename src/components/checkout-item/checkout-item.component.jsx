import React from "react";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import "./checkout-item.style.scss";

const CheckOutItem = ({ item }) => {
  const { title, thumbnail, quantity, price } = item;
  const { addItemToCart, removeCartItem, clearCartItem } = useContext(CartCtx);

  const handleRemoval = () => {
    clearCartItem(item);
  };
  const addOneHandler = () => {
    addItemToCart(item);
  };

  const takeOutOneHandler = () => {
    removeCartItem(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={thumbnail} alt={title} />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={takeOutOneHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addOneHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoval}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;

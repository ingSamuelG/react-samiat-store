import React from "react";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import "./checkout-item.style.scss";

const CheckOutItem = ({ item }) => {
  const { title, thumbnail, quantity, price } = item;
  const { addItemToCart, removeCartItem } = useContext(CartCtx);

  const handleRemoval = () => {
    removeCartItem(item);
  };
  const addOneHandler = () => {
    addItemToCart(item);
  };

  const takeOutOneHandler = () => {
    removeCartItem(item);
  };

  return (
    <div className="checkout-item-container">
      <img src={thumbnail} alt={title} />
      <div className="name-container">
        <span className="name">{title}</span>
      </div>
      <div className="checkout-button-container">
        <button type="button" onClick={addOneHandler}>
          +
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={takeOutOneHandler}>
          -
        </button>
      </div>
      <div className="price-container">{price}</div>
      <div className="remove-button-container" onClick={handleRemoval}>
        remove
      </div>
    </div>
  );
};

export default CheckOutItem;
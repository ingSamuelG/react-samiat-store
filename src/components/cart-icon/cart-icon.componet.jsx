import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = ({ ...otherProps }) => {
  const { cart } = useContext(CartCtx);
  const { cartItems } = cart;
  const count = cartItems.length;
  return (
    <div className="cart-icon-container" {...otherProps}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;

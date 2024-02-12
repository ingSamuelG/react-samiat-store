import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cart, setCart } = useContext(CartCtx);
  const { isCartDropDownOpen, cartItems } = cart;
  const count = cartItems.length;

  const toggleCartDropdown = () => {
    setCart({ ...cart, isCartDropDownOpen: !isCartDropDownOpen });
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;

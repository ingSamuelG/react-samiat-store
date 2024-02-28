import React from "react";
import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.style.jsx";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cart, setCart, calculateCartQty } = useContext(CartCtx);
  const { isCartDropDownOpen, cartItems } = cart;
  const count = calculateCartQty(cartItems);

  const toggleCartDropdown = () => {
    setCart({ ...cart, isCartDropDownOpen: !isCartDropDownOpen });
  };

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShopIcon />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

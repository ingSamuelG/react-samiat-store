import React from "react";
import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropDown } from "../../store/cart/cart.action.js";
import { selectCartCount } from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleToggleCartDropdown = () => {
    dispatch(toggleCartDropDown());
  };

  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

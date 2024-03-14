import React from "react";
import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.style.jsx";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { toggleCartDropdown, cartCount } = useContext(CartCtx);
  // const count = calculateCartQty(cartItems);

  const handleToggleCartDropdown = () => {
    toggleCartDropdown();
  };

  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

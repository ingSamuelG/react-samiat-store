import { createContext, useState } from "react";

export const CartCtx = createContext({
  isCartDropDown: false,
  cartItems: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ isCartDropDown: false, cartItems: [] });
  const value = { cart, setCart };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

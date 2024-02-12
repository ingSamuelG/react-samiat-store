import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: null,
  setCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isCartDropDownOpen: false,
    cartItems: [],
  });
  const value = { cart, setCart };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

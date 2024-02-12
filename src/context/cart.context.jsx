import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: null,
  setCart: () => {},
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isCartDropDownOpen: false,
    cartItems: [],
  });

  const addCartItem = (cartItems, productToAdd) => {
    console.log("added to cart");
    let found = false;
    if (cartItems.length > 0) {
      const newItems = cartItems.map((item) => {
        if (item.id === productToAdd.id) {
          found = true;
          item.quantity += 1;
          return item;
        } else {
          return item;
        }
      });
      if (found === false) {
        newItems.push({ ...productToAdd, quantity: 1 });
      }

      return newItems;
    } else {
      cartItems.push({ ...productToAdd, quantity: 1 });
      return cartItems;
    }
  };

  const addItemToCart = (productToAdd) => {
    const { cartItems } = cart;
    setCart({ ...cart, cartItems: addCartItem(cartItems, productToAdd) });
  };
  const value = { cart, setCart, addItemToCart };

  const { cartItems } = cart;
  console.log(cartItems);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

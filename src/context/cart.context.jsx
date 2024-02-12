import { createContext, useState, useEffect } from "react";

export const CartCtx = createContext({
  cart: null,
  setCart: () => {},
  addItemToCart: () => {},
  calculateCartQty: () => {},
  qtyCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  let found = false; // create a flag to mark if we found the same product in the card first state is false

  if (cartItems.length > 0) {
    // if the cart is not empty
    const newItems = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        // if you find the same product
        found = true; // mark the flag
        item.quantity += 1; // increse the quantity
        return item; // set the item with the new qnty
      } else {
        // else just give me the same item
        return item;
      }
    });

    if (found === false) {
      // if we checked the array and dint find anything
      newItems.push({ ...productToAdd, quantity: 1 }); // just add a new one
    }

    return newItems;
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const calculateCartQty = (items) => {
  return items.reduce((accum, currentItem) => currentItem.quantity + accum, 0);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isCartDropDownOpen: false,
    cartItems: [],
  });

  const addItemToCart = (productToAdd) => {
    const { cartItems } = cart;
    setCart({ ...cart, cartItems: addCartItem(cartItems, productToAdd) });
  };
  const value = { cart, setCart, addItemToCart, calculateCartQty };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

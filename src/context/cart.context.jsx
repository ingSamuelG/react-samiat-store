import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: null,
  setCart: () => {},
  calculateCartQty: () => {},
  addItemToCart: () => {},
  calculateCartTotal: () => {},
  removeCartItem: () => {},
  clearCartItem: () => {},
});

const setCartItemQtyWithCallbackResult = (
  callback,
  cartItems,
  productToAdd
) => {
  let found = false; // create a flag to mark if we found the same product in the card first state is false

  if (cartItems.length > 0) {
    // if the cart is not empty
    const newItems = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        // if you find the same product
        found = true; // mark the flag
        const newQty = callback(item.quantity);
        // increse the quantity
        return { ...productToAdd, quantity: newQty }; // set the item with the new qnty
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

const calculateCartTotal = (items) => {
  return items.reduce(
    (accum, currentItem) => currentItem.price * currentItem.quantity + accum,
    0
  );
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isCartDropDownOpen: false,
    cartItems: [],
  });

  const { cartItems } = cart;

  const clearCartItem = (productToRemove) => {
    const newCart = cartItems.filter((item) => item.id !== productToRemove.id);
    setCart({
      ...cart,
      cartItems: newCart,
    });
  };

  const removeCartItem = (productToRemove) => {
    if (productToRemove.quantity === 1) {
      clearCartItem(productToRemove);
    } else {
      setCart({
        ...cart,
        cartItems: setCartItemQtyWithCallbackResult(
          (qnty) => qnty - 1,
          cartItems,
          productToRemove
        ),
      });
    }
  };

  const addItemToCart = (productToAdd) => {
    setCart({
      ...cart,
      cartItems: setCartItemQtyWithCallbackResult(
        (qnty) => qnty + 1,
        cartItems,
        productToAdd
      ),
    });
  };

  const value = {
    cart,
    setCart,
    addItemToCart,
    removeCartItem,
    calculateCartQty,
    calculateCartTotal,
    clearCartItem,
  };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

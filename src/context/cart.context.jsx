import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: null,
  setCart: () => {},
  addItemToCart: () => {},
  calculateCartQty: () => {},
  calculateCartTotal: () => {},
  addOneToCartItem: () => {},
  minusOneCartItem: () => {},
  removeItemFromTheCart: () => {},
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

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => !(item.id === productToRemove.id));
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isCartDropDownOpen: false,
    cartItems: [],
  });

  const { cartItems } = cart;

  const removeItemFromTheCart = (productToRemove) => {
    setCart({ ...cart, cartItems: removeCartItem(cartItems, productToRemove) });
  };
  const addItemToCart = (productToAdd) => {
    setCart({
      ...cart,
      cartItems: setCartItemQtyWithCallbackResult(
        (qnty) => (qnty += 1),
        cartItems,
        productToAdd
      ),
    });
  };

  const addOneToCartItem = (productToAdd) => {
    setCart({
      ...cart,
      cartItems: setCartItemQtyWithCallbackResult(
        (qnty) => qnty + 1,
        cartItems,
        productToAdd
      ),
    });
  };

  const minusOneCartItem = (productToAdd) => {
    setCart({
      ...cart,
      cartItems: setCartItemQtyWithCallbackResult(
        (qnty) => {
          if (qnty > 0) {
            return qnty - 1;
          } else {
            return 0;
          }
        },
        cartItems,
        productToAdd
      ),
    });
  };

  const value = {
    cart,
    setCart,
    addItemToCart,
    addOneToCartItem,
    minusOneCartItem,
    calculateCartQty,
    calculateCartTotal,
    removeItemFromTheCart,
  };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

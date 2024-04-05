import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartDropDownOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

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

const deleteProductFromArray = (itemsArray, productToDelete) =>
  itemsArray.filter((item) => item.id !== productToDelete.id);

const removeProductFromItemArray = (items, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return deleteProductFromArray(items, productToRemove);
  } else {
    return setCartItemQtyWithCallbackResult(
      (qnty) => qnty - 1,
      items,
      productToRemove
    );
  }
};

const calculateProductTotalQtyAndTotalAmount = (products) => {
  return products.reduce(
    (accum, currentItem) => {
      const { totalAmount, totalQty } = accum;
      const calcTotalAmount =
        currentItem.price * currentItem.quantity + totalAmount;
      const calcTotalQty = currentItem.quantity + totalQty;

      return { totalAmount: calcTotalAmount, totalQty: calcTotalQty };
    },
    { totalAmount: 0, totalQty: 0 }
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    toggleDropDown(state, action) {
      state.isCartDropDownOpen = !state.isCartDropDownOpen;
    },

    setNewItem(state, action) {
      const newCartItems = setCartItemQtyWithCallbackResult(
        (qnty) => qnty + 1,
        state.cartItems,
        action.payload
      );
      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      state.cartItems = newCartItems;
      state.cartCount = totalQty;
      state.cartTotal = totalAmount;
    },
    deleteItem(state, action) {
      const newCartItems = deleteProductFromArray(
        state.cartItems,
        action.payload
      );

      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      state.cartItems = newCartItems;
      state.cartCount = totalQty;
      state.cartTotal = totalAmount;
    },

    reduceOneItem(state, action) {
      const newCartItems = removeProductFromItemArray(
        state.cartItems,
        action.payload
      );

      const { totalAmount, totalQty } =
        calculateProductTotalQtyAndTotalAmount(newCartItems);

      state.cartItems = newCartItems;
      state.cartCount = totalQty;
      state.cartTotal = totalAmount;
    },
  },
});

export const { toggleDropDown, setNewItem, deleteItem, reduceOneItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

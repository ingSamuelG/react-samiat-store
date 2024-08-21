export enum CART_ACTION_TYPES {
  SET_NEW_ITEM_TO_CART = "SET_NEW_ITEM_TO_CART",
  TOGGLE_CART_DROP_DOWN = "TOGGLE_CART_DROP_DOWN",
  REMOVE_ONE_CART_ITEM = "REMOVE_ONE_CART_ITEM",
  DELETE_CART_ITEM = "DELETE_CART_ITEM",
};

export type CartItem = {
  id: number
  title: string
  thumbnail: string
  quantity: number
  price: number
}

// { title, thumbnail, quantity, price }

import React from "react";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";
import {
  CheckOutItemContainer,
  CheckOutDescriptor,
  CheckOutItemImageWrapper,
  Arrow,
  CheckOutItemImage,
  CheckOutDescriptorForQty,
  QuantityAmount,
  CheckOutRemoveButton,
} from "./checkout-item.style.jsx";

const CheckOutItem = ({ item }) => {
  const { title, thumbnail, quantity, price } = item;
  const { addItemToCart, removeCartItem, clearCartItem } = useContext(CartCtx);

  const handleRemoval = () => {
    clearCartItem(item);
  };
  const addOneHandler = () => {
    addItemToCart(item);
  };

  const takeOutOneHandler = () => {
    removeCartItem(item);
  };

  return (
    <CheckOutItemContainer>
      <CheckOutItemImageWrapper>
        <CheckOutItemImage src={thumbnail} alt={title} />
      </CheckOutItemImageWrapper>
      <CheckOutDescriptor>{title}</CheckOutDescriptor>
      <CheckOutDescriptorForQty>
        <Arrow onClick={takeOutOneHandler}>&#10094;</Arrow>
        <QuantityAmount>{quantity}</QuantityAmount>
        <Arrow onClick={addOneHandler}>&#10095;</Arrow>
      </CheckOutDescriptorForQty>
      <CheckOutDescriptor>{price}</CheckOutDescriptor>
      <CheckOutRemoveButton onClick={handleRemoval}>
        &#10005;
      </CheckOutRemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;

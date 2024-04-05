import React from "react";
import { useDispatch } from "react-redux";
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
import {
  deleteItem,
  setNewItem,
  reduceOneItem,
} from "../../store/cart/cart.reducer.js";

const CheckOutItem = ({ item }) => {
  const { title, thumbnail, quantity, price } = item;
  const dispatch = useDispatch();

  const handleRemoval = () => {
    dispatch(deleteItem(item));
  };
  const addOneHandler = () => {
    dispatch(setNewItem(item));
  };

  const takeOutOneHandler = () => {
    dispatch(reduceOneItem(item));
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

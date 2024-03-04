import React, { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartCtx } from "../../context/cart.context";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  CheckOutTotal,
} from "./checkout.style.jsx";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartCtx);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Products</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.length === 0 ? (
        <h2>How lonely add something to the card</h2>
      ) : (
        <>
          {cartItems.map((item) => {
            return <CheckOutItem key={item.id} item={item} />;
          })}
          <CheckOutTotal>
            <span>{`Total: ${cartTotal}`}</span>
          </CheckOutTotal>
        </>
      )}
    </CheckOutContainer>
  );
};

export default CheckOut;

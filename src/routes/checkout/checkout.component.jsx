import { useSelector } from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  CheckOutTotal,
} from "./checkout.style.jsx";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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

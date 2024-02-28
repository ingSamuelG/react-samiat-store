import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemList = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CheckOutButton = styled(Button)`
  margin-top: auto;
`;

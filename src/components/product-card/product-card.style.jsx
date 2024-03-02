import styled from "styled-components";
import {
  BaseButton,
  InvertedButton,
  GoogleSingInButton,
} from "../button/button.styles";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;
  border-radius: 10px;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 10px 10px;
  }

  ${BaseButton},
  ${InvertedButton},
  ${GoogleSingInButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton},
    ${InvertedButton},
    ${GoogleSingInButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.span`
  width: 10%;
`;

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  //   position: absolute;
  //   bottom: 10px;
  //   padding: 20px 10px;
`;

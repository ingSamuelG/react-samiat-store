import React from "react";
import {
  ProductCardContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./product-card.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartCtx } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = (product) => {
  const { title, thumbnail, price } = product;
  const { addItemToCart } = useContext(CartCtx);
  const handleAddProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={`${thumbnail}`} alt={`product ${title}`} />
      <ProductFooter>
        <ProductName>{title}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button
        onClick={handleAddProductToCart}
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

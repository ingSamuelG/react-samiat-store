import React from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryPreviewList,
} from "./category-preview.styles.jsx";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle onClick={() => navigate(`${title}`)}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <CategoryPreviewList>
        {products.slice(0, 4).map(({ id, name, imageUrl, price }) => (
          <ProductCard
            id={id}
            title={name}
            thumbnail={imageUrl}
            price={price}
            key={id}
          />
        ))}
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

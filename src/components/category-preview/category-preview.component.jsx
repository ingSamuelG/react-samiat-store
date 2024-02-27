import React from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => navigate(`${title}`)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map(({ id, name, imageUrl, price }) => (
          <ProductCard
            id={id}
            title={name}
            thumbnail={imageUrl}
            price={price}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

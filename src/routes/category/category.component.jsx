import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesCtx } from "../../context/categories.context";
import "./category.styyle.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesCtx);
  const [productsByCategory, setProductsByCategory] = useState(
    categoriesMap[category]
  );

  useEffect(() => {
    setProductsByCategory(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {productsByCategory &&
          productsByCategory.map(({ id, name, imageUrl, price }) => {
            return (
              <ProductCard
                id={id}
                title={name}
                thumbnail={imageUrl}
                price={price}
                key={id}
              />
            );
          })}
      </div>
    </>
  );
};

export default Category;

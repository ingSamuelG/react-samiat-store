import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesCtx } from "../../context/categories.context";
import { CategoryContainer, CategoryTitle } from "./category.styyle.jsx";
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
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
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
      </CategoryContainer>
    </>
  );
};

export default Category;

import { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.styyle.jsx";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component.jsx";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [productsByCategory, setProductsByCategory] = useState(
    categoriesMap[category]
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Category;

import { useContext } from "react";
import { CategoriesCtx } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesCtx);

  return Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title];
    return (
      <div className="Categories-preview-container" key={title}>
        <CategoryPreview title={title} products={products} />
      </div>
    );
  });
}

export default CategoriesPreview;

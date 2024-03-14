import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    categoriesMap &&
    Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return (
        <div className="Categories-preview-container" key={title}>
          <CategoryPreview title={title} products={products} />
        </div>
      );
    })
  );
}

export default CategoriesPreview;

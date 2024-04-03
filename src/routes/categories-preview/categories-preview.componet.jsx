import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    categoriesMap &&
    Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return isLoading ? (
        <Spinner />
      ) : (
        <div className="Categories-preview-container" key={title}>
          <CategoryPreview title={title} products={products} />
        </div>
      );
    })
  );
}

export default CategoriesPreview;

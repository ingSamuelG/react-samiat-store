import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody,
} from "./directory-item.style.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category: { _, title, imageUrl } }) => {
  const navigate = useNavigate();

  const handleShopButtonLink = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <DirectoryItemContainer>
      <BackgroundImage imgUrl={imageUrl} />
      <DirectoryBody onClick={handleShopButtonLink}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

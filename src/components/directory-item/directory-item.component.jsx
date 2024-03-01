import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ category: { _, title, imageUrl } }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imgUrl={imageUrl} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

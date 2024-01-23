// ImageComponent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ImageComponent = ({ cardData }) => {
  const { id } = useParams();
console.log(cardData);
  // Find the card with the matching ID
  const selectedCard = cardData.find((card) => card.id === id);

  if (!selectedCard) {
    // Handle the case where the card with the given ID is not found
    return <div>Image not found</div>;
  }

  const { title, imageUrl } = selectedCard;

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      {/* Add any additional content or styling as needed */}
    </div>
  );
};

export default ImageComponent;

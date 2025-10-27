import { useContext } from "react";
import "../blocks/ItemCard.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard({ item, handleCardPreview, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);
  const isLoggedIn = !!currentUser._id;

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const cardPreview = () => {
    handleCardPreview(item);
  };

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={cardPreview}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />

      {isLoggedIn && (
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
          aria-label="Like item"
        ></button>
      )}
    </li>
  );
}

export default ItemCard;
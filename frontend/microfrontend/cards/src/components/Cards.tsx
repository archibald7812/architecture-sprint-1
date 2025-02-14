import React, { useContext } from "react";
import Card from "./Card";
import api from "../utils/api";
import { AppContext } from "shared-context_shared-library";
import ImagePopup from "./ImagePopup";
import "../index.css";

const Cards = () => {
  const { user, cards, setCardsHandler } = useContext(AppContext);

  const [selectedCard, setSelectedCard] = React.useState(null);

  // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании.
  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData]) => {
        setCardsHandler(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCardsHandler((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === user._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCardsHandler((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <section className="places page__section">
      <ul className="places__list">
        {cards?.length &&
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      </ul>
    </section>
  );
};

export default Cards;

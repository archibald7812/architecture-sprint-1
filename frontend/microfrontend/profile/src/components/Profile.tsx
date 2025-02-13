import React, { useContext, useState } from "react";
import api from "../utils/api";
import { AppContext } from "shared-context_shared-library";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

const Profile = () => {
  const { user, setUserHandler, setCardsHandler, cards } =
    useContext<any>(AppContext);
  const [editProfilePopupVisible, setEditProfilePopupVisible] = useState(false);
  const [editAvatarPopupVisible, setEditAvatarPopupVisible] = useState(false);
  const [addPlacePopupVisible, setAddPlacePopupVisible] = useState(false);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([userData]) => {
        setUserHandler(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateAvatar(avatarUpdate: any) {
    api
      .setUserAvatar(avatarUpdate)
      .then((newUserData) => {
        setUserHandler(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard: any) {
    api
      .addCard(newCard)
      .then((newCardFull) => {
        setCardsHandler([newCardFull, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  const closeAllPopups = () => {
    setEditProfilePopupVisible(false);
    setEditAvatarPopupVisible(false);
    setAddPlacePopupVisible(false);
  };

  const imageStyle = { backgroundImage: `url(${user?.avatar})` };

  return (
    <section className="profile page__section">
      <div
        className="profile__image"
        onClick={() => setEditAvatarPopupVisible(true)}
        style={imageStyle}
      ></div>
      <div className="profile__info">
        <h1 className="profile__title">{user?.name}</h1>
        <button
          className="profile__edit-button"
          type="button"
          onClick={() => setEditProfilePopupVisible(true)}
        ></button>
        <p className="profile__description">{user?.about}</p>
      </div>
      <button
        className="profile__add-button"
        type="button"
        onClick={() => setAddPlacePopupVisible(true)}
      ></button>
      <EditProfilePopup
        isOpen={editProfilePopupVisible}
        onClose={() => closeAllPopups()}
      />
      <EditAvatarPopup
        isOpen={editAvatarPopupVisible}
        onUpdateAvatar={handleUpdateAvatar}
        onClose={() => closeAllPopups()}
      />
      <AddPlacePopup
        isOpen={addPlacePopupVisible}
        onAddPlace={handleAddPlaceSubmit}
        onClose={() => closeAllPopups()}
      />
    </section>
  );
};

export default Profile;

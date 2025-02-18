import React from "react";
import PopupWithForm from "./PopupWithForm";
import { AppContext, AppContextType } from "shared-context_shared-library";
import api from "../utils/api";

function EditProfilePopup({ isOpen, onClose }: any) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e: any) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e: any) {
    setDescription(e.target.value);
  }

  const { user, setUserHandler } = React.useContext<AppContextType>(AppContext);

  React.useEffect(() => {
    if (user) {
      setName(user.name);
      setDescription(user.about);
    }
  }, [user]);

  const onUpdateUser = ({ name, about }: any) => {
    api
      .setUserInfo({ ...user, name, about })
      .then((newUserData) => {
        setUserHandler(newUserData);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  function handleSubmit(e: any) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Редактировать профиль"
      name="edit"
    >
      <label className="popup__label">
        <input
          type="text"
          name="userName"
          id="owner-name"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
          pattern="[a-zA-Zа-яА-Я -]{1,}"
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="owner-name-error"></span>
      </label>
      <label className="popup__label">
        <input
          type="text"
          name="userDescription"
          id="owner-description"
          className="popup__input popup__input_type_description"
          placeholder="Занятие"
          required
          minLength={2}
          maxLength={200}
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="owner-description-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

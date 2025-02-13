import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onAddPlace, onClose }: any) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e: any) {
    setName(e.target.value);
  }

  function handleLinkChange(e: any) {
    setLink(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Новое место"
      name="new-card"
    >
      <label className="popup__label">
        <input
          type="text"
          name="name"
          id="place-name"
          className="popup__input popup__input_type_card-name"
          placeholder="Название"
          required
          minLength={1}
          maxLength={30}
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="place-name-error"></span>
      </label>
      <label className="popup__label">
        <input
          type="url"
          name="link"
          id="place-link"
          className="popup__input popup__input_type_url"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

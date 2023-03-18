
function PopupWithForm(){

    return(
        <>
      <div className="popup popup-edit-profile">
      
      <button type="reset" className="popup__close-button"></button>
      <form action="#" method="GET" name="popupContainer" className="popup__container" novalidate>
        <h3 className="popup__title">Редактировать профиль</h3>

        <input type="text" name="profileNameInput" id="profile-name-input"
          className="popup__input popup__input_profile-name" minlength="2" maxlength="40" autocomplete="off" required/>
        <span className="popup__input-error-message profile-name-input-error-message"></span>

        <input type="text" name="profileDescriptionInput" id="profile-description-input"
          className="popup__input popup__input_profile-description" minlength="2" maxlength="200" autocomplete="off"
          required/>
        <span className="popup__input-error-message profile-description-input-error-message"></span>

        <button type="submit" className="popup__save-button">Сохранить</button>
      </form>
      </div>
    
    <div className="popup popup-new-place">
    <button type="reset" className="popup__close-button popup__close-button_new-place"></button>
    <form action="#" method="GET" name="popupContainer" className="popup__container popup__container_new-place"
      novalidate>
      <h3 className="popup__title popup__title_new-place">Новое место</h3>

      <input type="text" placeholder="Название" name="placeNameInput" id="place-name-input"
        className="popup__input popup__input_new-place popup__input_place-name" minlength="2" maxlength="30"
        autocomplete="off" required/>
      <span className="popup__input-error-message place-name-input-error-message"></span>

      <input type="url" placeholder="Ссылка на картинку" name="placeLinkInput" id="place-link-input"
        className="popup__input popup__input_new-place popup__input_place-link" autocomplete="off" required/>
      <span className="popup__input-error-message place-link-input-error-message"></span>

      <button type="submit" className="popup__save-button popup__create-button">Сохранить</button>
    </form>
  </div>

  <div className="popup popup-remove-card">
    <button type="reset" className="popup__close-button"></button>
    <form action="#" method="GET" name="popupContainer" className="popup__container popup__container_remove-card"
      novalidate>
      <h3 className="popup__title">Вы уверены?</h3>
      <button type="submit" className="popup__save-button popup__create-button">Да</button>
    </form>
  </div>

  <div className="popup popup-edit-avatar">
    <button type="reset" className="popup__close-button"></button>
    <form action="#" method="GET" name="popupContainer" className="popup__container popup__container_avatar" novalidate>
      <h3 className="popup__title">Обновить аватар</h3>

      <input type="url" placeholder="Ссылка на аватар" name="avatarLinkInput" id="avatar-link-input"
        className="popup__input popup__input_new-place popup__input_place-link" autocomplete="off" required/>
      <span className="popup__input-error-message avatar-link-input-error-message"></span>

      <button type="submit" className="popup__save-button popup__create-button">Сохранить</button>
    </form>
  </div>
  </>
    )
}

export default PopupWithForm;
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function Main(){
  
    let editAvatar = document.querySelector('.popup-edit-avatar');
    let editProfile = document.querySelector('.popup-edit-profile');
    let addPlace = document.querySelector('.popup-new-place');


    const[editAvatarState,setEditAvatarState] = React.useState({
      isOpen:false,
    });
    const[editProfileState, setEditProfileState] = React.useState({
      isOpen:false,
    });
    const[addPlaceState, setAddPlaceState] = React.useState({
      isOpen:false,
    });

  const handleEditAvatarClick = () =>{
    editAvatar.classList.add('popup_opened')
  };

  const handleEditProfileClick = () =>{
    editProfile.classList.add('popup_opened')
  };

  const handleAddPlaceClick = () =>{
    addPlace.classList.add('popup_opened')
  };

    return(
        <main className='content'>
      <div className='profile'>
          <button className="profile__edit-avatar-button" onClick={handleEditAvatarClick}></button>
          <div className='profile__info'>
            <div className='profile__name-container'>
                <h1 className='profile__name'>Жак-Ив Кусто</h1>
                <button className='profile__edit-profile-button' onClick={handleEditProfileClick}></button>
            </div>
            <p className='profile__description'>Исследователь океана</p>
          </div>
          <button className='profile__create-new-place-button' onClick={handleAddPlaceClick}></button>
      </div>

      <PopupWithForm/>

      <div className='container'>
      </div>

      <div className="popup popup-photo">
        <div className="popup__photo-container">
          <button type="reset" className="popup__close-button popup__close-button_photo"></button>
          <img className="popup__image" src="#" alt="#"/>
          <p className="popup__photo-title"></p>
        </div>
      </div>
      </main>


      
    )
}

export default Main;
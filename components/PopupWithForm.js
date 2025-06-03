import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super({ popupSelector });
    this._popup = document.querySelector(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._submitButton = this._form.querySelector('.popup__submit-button');
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      const formValues = this._getInputValues();
      this._handleFormSubmit(formValues);
      evt.preventDefault();
    });
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains("add-todo-popup")) {
        this.close();
      }
    });
    super.setEventListeners();
  }

  // open() {
  //   this._popup.classList.add('popup_visible');
  //   this.setEventListeners();
  // }
  
//   close() {
//     this._popup.classList.remove('popup_visible');
//     this._form.reset();
//   }
 }

export default PopupWithForm;
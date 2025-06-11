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
      evt.preventDefault();
      const formValues = this._getInputValues();
      this._handleFormSubmit(formValues);
    });
    super.setEventListeners();
  }
 }

export default PopupWithForm;
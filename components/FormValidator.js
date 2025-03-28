<<<<<<< HEAD
class FormValidator {
    constructor (settings, formEL) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
    }
=======
class FormValidator {
    constructor (settings, formEL) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
    }
    enableValidation() {}
}
>>>>>>> fc86b944cf5303a4f2f12a397f9c161c3ca24759

<<<<<<< HEAD
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            showInputError(
              formElement,
              inputElement,
              inputElement.validationMessage,
              settings,
            );
          } else {
            hideInputError(formElement, inputElement, settings);
          }
        };
    }

    _setEventListners() {
        this._inputList = Array.from(
            formElement.querySelectorAll(settings.inputSelector),
          );
          const buttonElement = formElement.querySelector(
            settings.submitButtonSelector,
          );
        
          toggleButtonState(inputList, buttonElement, settings);
        
          inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              checkInputValidity(inputElement);
              toggleButtonState(inputList, buttonElement, settings);
            });
          });
        

    enableValidation() {
        this._formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(formElement, settings)
    }
}

export default FormValidator;
=======

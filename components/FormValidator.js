class FormValidator {
    constructor (settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
    }
  
    _checkInputValidity(inputElement) {
      console.log("checkInputValidity");
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
  
    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(settings.inputSelector),
          );
          this._buttonElement = this._formEl.querySelector(
            settings.submitButtonSelector,
          );
        
          this.toggleButtonState(this._inputList, this._buttonElement, settings);
        
          this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              toggleButtonState(this._inputList, this._buttonElement, settings);
            });
          });
        }
        
    enableValidation() {
      console.log("enableValidation");
        this._formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners()
        console.log(">>>>>", this._formEl);
    }
  }
  
  export default FormValidator;
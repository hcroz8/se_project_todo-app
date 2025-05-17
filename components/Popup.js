class Popup {
    constructor({popupSelector})

    open() {
        this._popupElement = document.querySelector(popupSelector);
        this._popupElement.classList.add("popup_opened");
        this._setEventListeners();
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        this._removeEventListeners();
    }

    _handleEscapeClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup__close")) {
                this.close();
            }
        });
        document.addEventListener("keydown", this._handleEsc);
    }
}

export default Popup;
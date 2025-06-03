class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector)
    }

    open() {
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keydown", this._handleEscapeClose);
        this.setEventListeners();
    }

    close() {
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keydown", this._handleEscapeClose);
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
        })
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("add-todo-popup")|| evt.target.classList.contains("popup")) {
                this.close();
            }
        });
        document.addEventListener("keydown", this._handleEsc);
    }
}

export default Popup;

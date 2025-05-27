class Todo {
  constructor(data, selector, onCheckboxChange, onDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._onCheckboxChange = onCheckboxChange;
    this._onDelete = onDelete;
 
  }

  _setEventListener() {
    this._todoDeleteBtnEl.addEventListener("click", () => {
      this._onDelete();
    });
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      
      this._onCheckboxChange(this._data.completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");
    this._todoDeleteBtnEl = todoDeleteBtnEl;

    todoNameEl.textContent = this._data.name;

    if (this._data.date instanceof Date && !isNaN(this._data.date))  {
      todoDate.textContent = `Due: ${this._data.date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
    else {
      todoDate.textContent = ""
    };

    this._generateCheckboxEl();
    this._setEventListener();

    return this._todoElement;
  }

  delete()  {
    this._todoElement.remove();
  }
}

export default Todo;


import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import TodoCounter from '../components/TodoCounter.js';

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list"});

const todoCounter = new TodoCounter (initialTodos, ".counter__text");

const closeOverlay = (evt) => {
  if (evt.target.classList.contains("modal")) {
    closeModal(addTodoPopup);
  }
  console.log("closeOverlay called");
}

const openModal = (modal) => {
  modal.classList.add("popup_visible");
  modal.addEventListener("click", closeOverlay);
  console.log("openModal called");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
  modal.removeEventListener("click", closeOverlay);
  console.log("closeModal called");
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, (completed) => {
    todoCounter.updateCompleted(completed);
    todoCounter.updateTotal(false);
    todo.delete();
  });
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  todoCounter.updateTotal(true);
  closeModal(addTodoPopup);
  formValidator.resetValidation(); 
});

const handleEsc = (evt) => {
  if (evt.key === "Escape") {
    closeModal(addTodoPopup);
  }
};

document.addEventListener("keydown", handleEsc);

function renderTodo(item) {
  const todo = generateTodo(item);
  todosList.prepend(todo);
};
 
section.renderItems()

const PopupWithForm = new PopupWithForm('#add-todo-popup', handleFormSubmit);


const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
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
  renderer: (item) => {
    const todo = new Todo(item, "#todo-template");
    const todoElement = todo.getView();
    todosList.prepend(todoElement);
  },
  containerSelector: ".todos__list"});

const todoCounter = new TodoCounter;

//const renderItems =  (items) => {
 // items.forEach((item) => {
   // const todo = new Todo(item, "#todo-template");
   // const todoElement = todo.getView();
   // todosList.prepend(todoElement);
 // });
//};

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};


const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

//addTodoForm.addEventListener("submit", (evt) => {
  //evt.preventDefault();
  //const name = evt.target.name.value;
  //const dateInput = evt.target.date.value;

  //const date = new Date(dateInput);
  //date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  //const id = uuidv4();
  //const values = { name, date, id };
  //renderTodo(values);
  //closeModal(addTodoPopup);
  //formValidator.resetValidation(); 
//});

const handleEsc = (evt) => {
  if (evt.key === "Escape") {
    closeModal(addTodoPopup);
  }
};

document.addEventListener("keydown", handleEsc);

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.prepend(todo);
};
 
section.renderItems()
// initialTodos.forEach((item) => {
  // const todo = generateTodo(item);
  // todosList.append(todo);
//});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
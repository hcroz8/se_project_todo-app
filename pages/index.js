import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import TodoCounter from '../components/TodoCounter.js';
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list"});

const todoCounter = new TodoCounter (initialTodos, ".counter__text");

const newTodoForm = new PopupWithForm({popupSelector: '#add-todo-popup', handleFormSubmit: handleFormSubmit});
  newTodoForm.setEventListeners();

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, (completed) => {
    if (completed);
    todoCounter.updateTotal(false);
    todo.delete();
  });
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
 newTodoForm.open();
});


function handleFormSubmit(formValues){
  const name = formValues.name;
  const dateInput = formValues.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  todoCounter.updateTotal(true);
  newTodoForm.close();
  formValidator.resetValidation(); 
};

function renderTodo(item) {
  const todo = generateTodo(item);
  section.addItem(todo);
};
 
section.renderItems()

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
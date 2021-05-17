import uniqid from "uniqid";
import {elements} from "./base";


const prepareFormUI = () => {
  elements.main.classList.add('hide');
  elements.todoForm.classList.remove('hide');
}

const selectDefaultOption = (title) => {
  if (title !== 'All TODOs' && title !== 'Today'){
    document.querySelector(`select > option[value="${title}"]`).selected = "true";
  }
}

const renderForm = (title, id) => {
  document.querySelector(`.new-todo-${id}`).addEventListener('click', () => {
    prepareFormUI()
    selectDefaultOption(title);
  })
}

const updateProjectTitle = (title) => {
  let id = uniqid();
  const category = document.querySelector('.category');
  category.textContent = '';

  const markup = `<div class="category-title">${title}</div>
                  <div class="new-todo new-todo-${id}"><i class="fas fa-plus"></i></div>`;

  category.insertAdjacentHTML("beforeend", markup);

  renderForm(title, id);
}

export default updateProjectTitle;
import updateProjectTitle from './updateTitle.js';
import { elements } from './base.js';
import Project from './Project.js';
import paintTodoItem from './todoItem.js';
import prepareMainUI from './prepareMainUI.js';

const renderProjectTODOs = (clsName, title) => {
  document.querySelector(`.${clsName}`).onclick = () => {
    prepareMainUI();
    updateProjectTitle(title);

    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(Project.read()[title]).forEach((todo) => {
      paintTodoItem({ project: title, todo, parent: ul });
    });
  };
};

export default renderProjectTODOs;
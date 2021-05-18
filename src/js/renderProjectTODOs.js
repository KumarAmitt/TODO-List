import updateProjectTitle from "./updateTitle";
import {elements} from "./base";
import Project from "./Project";
import paintTodoItem from "./todoItem";
import prepareMainUI from "./prepareMainUI";

const renderProjectTODOs = (clsName, title) => {
  document.querySelector(`.${clsName}`).onclick = () => {
    prepareMainUI();
    updateProjectTitle(title)

    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(Project.read()[title]).forEach(todo => {
      paintTodoItem({project: title, todo: todo, parent: ul})
    })
  }
}

export default renderProjectTODOs;
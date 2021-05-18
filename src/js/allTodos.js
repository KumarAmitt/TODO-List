import {elements} from "./base";
import prepareMainUI from "./prepareMainUI";
import updateProjectTitle from "./updateTitle";
import paintTodoItem from "./todoItem";
import Project from './Project'

const allTODOs = () => {
  prepareMainUI();
  updateProjectTitle('All TODOs');

  const ul = elements.todoListUL;
  ul.textContent = '';

  Object.entries(Project.read()).forEach(project => {
    Object.entries(project[1]).forEach(todo => {
      paintTodoItem({project: project[0], todo: todo, parent: ul})
    })
  })
}

export default allTODOs;
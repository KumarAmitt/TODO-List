import {elements, projects} from "./base";
import {prepareMainUI} from "./shared";
import updateProjectTitle from "./updateTitle";
import paintTodoItem from "./todoItem";
import {readStorage} from "./runApp";

const allTODOs = () => {
  prepareMainUI();
  updateProjectTitle('All TODOs');

  const ul = elements.todoListUL;
  ul.textContent = '';

  Object.entries(readStorage()).forEach(project => {
    Object.entries(project[1]).forEach(todo => {
      paintTodoItem({project: project[0], todo: todo, parent: ul})
    })
  })
}

export default allTODOs;
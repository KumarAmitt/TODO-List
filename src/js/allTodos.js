import {elements, projects} from "./base";
import {prepareMainUI, updateProjectTitle, paintTodoItem} from "./helper";

const allTODOs = () => {
  prepareMainUI();
  updateProjectTitle('All TODOs');

  const ul = elements.todoListUL;
  ul.textContent = '';

  Object.entries(projects).forEach(project => {
    Object.entries(project[1]).forEach(todo => {
      paintTodoItem({project: project[0], todo: todo, parent: ul})
    })
  })
}

export default allTODOs;
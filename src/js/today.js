import {elements, projects} from "./base";
import {format} from "date-fns";
import {prepareMainUI} from "./shared";
import updateProjectTitle from "./updateTitle";
import paintTodoItem from "./todoItem";

const todayTODOs = () => {
  prepareMainUI();
  updateProjectTitle('Today');

  const ul = elements.todoListUL;
  ul.textContent = '';

  Object.entries(projects).filter(project => {
    Object.entries(project[1]).filter(p => p[1].ddt.slice(0, 10) === format(new Date(),'yyyy-MM-dd')).forEach(todo => {
      paintTodoItem({project: project[0], todo: todo, parent: ul})
    })
  })
}

export default todayTODOs;
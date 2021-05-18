import {elements, projects} from "./base";
import {format} from "date-fns";
import prepareMainUI from "./prepareMainUI";
import updateProjectTitle from "./updateTitle";
import paintTodoItem from "./todoItem";
import Project from './Project'

const todayTODOs = () => {
  prepareMainUI();
  updateProjectTitle('Today');

  const ul = elements.todoListUL;
  ul.textContent = '';

  let data = Project.read();
  Object.entries(data).filter(project => {
    Object.entries(project[1]).filter(p => p[1].ddt.slice(0, 10) === format(new Date(),'yyyy-MM-dd')).forEach(todo => {
      paintTodoItem({project: project[0], todo: todo, parent: ul})
    })
  })
}

export default todayTODOs;
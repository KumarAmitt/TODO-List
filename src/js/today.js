import { format } from 'date-fns';
import { elements } from './base.js';
import prepareMainUI from './prepareMainUI.js';
import updateProjectTitle from './updateTitle.js';
import paintTodoItem from './todoItem.js';
import Project from './Project.js';

const todayTODOs = () => {
  prepareMainUI();
  updateProjectTitle('Today');

  const ul = elements.todoListUL;
  ul.textContent = '';

  const data = Project.read();
  Object.entries(data).forEach((project) => {
    Object.entries(project[1]).filter((p) => p[1].ddt.slice(0, 10) === format(new Date(), 'yyyy-MM-dd')).forEach((todo) => {
      paintTodoItem({ project: project[0], todo, parent: ul });
    });
  });
};

export default todayTODOs;
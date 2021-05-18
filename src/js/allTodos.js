import { elements } from './base.js';
import prepareMainUI from './prepareMainUI.js';
import updateProjectTitle from './updateTitle.js';
import paintTodoItem from './todoItem.js';
import Project from './Project.js';

const allTODOs = () => {
  prepareMainUI();
  updateProjectTitle('All TODOs');

  const ul = elements.todoListUL;
  ul.textContent = '';

  Object.entries(Project.read()).forEach((project) => {
    Object.entries(project[1]).forEach((todo) => {
      paintTodoItem({ project: project[0], todo, parent: ul });
    });
  });
};

export default allTODOs;
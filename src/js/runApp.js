import { elements, prevProject } from './base.js';
import Project from './Project.js';
import Todo from './Todo.js';
import prepareMainUI from './prepareMainUI.js';
import allTODOs from './allTodos.js';
import todayTODOs from './today.js';
import paintTodoItem from './todoItem.js';
import updateProjectTitle from './updateTitle.js';
import refreshProjectList from './refreshProjectList.js';
import updateSelectOptions from './updateSelectOptions.js';
import readFormInput from './readFormInput.js';

const runApp = () => {
  elements.newPSubmit.addEventListener('click', () => {
    const inputField = document.querySelector('[name="projectName"]');
    const projectName = inputField.value;

    const project = new Project(projectName);

    if (project.nameIsBlank()) {
      inputField.placeholder = 'Field can\'t be blank';
    } else if (!project.checkUniqueness()) {
      inputField.placeholder = 'Project already exists';
    } else {
      elements.projectUL.textContent = '';
      project.addProject();
      refreshProjectList();
      updateSelectOptions();
    }
    elements.newProjectForm.reset();
  });

  elements.all.addEventListener('click', () => {
    allTODOs();
  });

  elements.today.addEventListener('click', () => {
    todayTODOs();
  });

  elements.todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const [project, title, desc, ddt, priority] = readFormInput();

    const todo = new Todo(project, title, desc, ddt, priority);

    if (elements.submit.value === 'Create TODO') {
      todo.addTODO();
    } else {
      const prevPjt = prevProject[0];
      const tid = prevProject[1];
      const status = prevProject[2];
      Todo.updateTODO(prevPjt, project, tid, title, desc, ddt, priority, status);
    }

    prepareMainUI();
    updateProjectTitle(project);
    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(Project.read()[project]).forEach((todo) => {
      paintTodoItem({ project, todo, parent: ul });
    });

    elements.todoForm.reset();
  });
};

export default runApp;
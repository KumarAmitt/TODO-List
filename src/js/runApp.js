import {elements, projects} from "./base";
import Project from "./Project";
import {refreshProjectList, updateSelectOptions} from "./helper";
import allTODOs from "./allTodos";
import todayTODOs from "./today";
import Todo from "./Todo";

const readFormInput = () => {
  const project = document.getElementById('select').value;
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddt = document.getElementById('due-dt').value;
  const priority = document.getElementById('todoForm').elements.priority.value;

  return [project, title, desc, ddt, priority];
}

const runApp = () => {

  elements.newPSubmit.addEventListener('click', () => {
    const inputField = document.querySelector('[name="projectName"]');
    const projectName = inputField.value;

    let project = new Project(projectName);

    if (project.nameIsBlank()) {
      inputField.placeholder = 'Field can\'t be blank';
    } else if(project.checkUniqueness()) {
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

  document.getElementById('todoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const [project, title, desc, ddt, priority] = readFormInput();

    let todo = new Todo(project, title, desc, ddt, priority);
    todo.addTODO();

    elements.todoForm.classList.toggle('hide');
    elements.main.classList.remove('hide')
  });

}

export default runApp;
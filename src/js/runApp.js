import {elements, prevProject, projects} from "./base";
import Project from "./Project";
import Todo from "./Todo";
import {prepareMainUI, refreshProjectList, updateSelectOptions} from "./shared";
import allTODOs from "./allTodos";
import todayTODOs from "./today";
import paintTodoItem from "./todoItem";
import updateProjectTitle from "./updateTitle";


export const readFormInput = () => {
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
    } else if(!project.checkUniqueness()) {
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
    // const [project, title, desc, ddt, priority] = readFormInput();
    //
    // let todo = new Todo(project, title, desc, ddt, priority);
    // todo.addTODO();
    //
    // prepareMainUI();
    // updateProjectTitle(project)
    // const ul = elements.todoListUL;
    // ul.textContent = '';
    //
    // Object.entries(projects[project]).forEach(todo => {
    //   paintTodoItem({project: project, todo: todo, parent: ul})
    // })
    //
    // document.getElementById('todoForm').reset();


    //-------------------------


    const [project, title, desc, ddt, priority] = readFormInput();

    let todo = new Todo(project, title, desc, ddt, priority);

    if (document.querySelector('.submit').value === 'Create TODO'){
      todo.addTODO();
      console.log(projects)
    }else{
      todo.updateTODO(prevProject[0], project, prevProject[1], title, desc, ddt, priority)
      console.log(projects);
    }

    prepareMainUI();
    updateProjectTitle(project)
    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(projects[project]).forEach(todo => {
      paintTodoItem({project: project, todo: todo, parent: ul})
    })

    document.getElementById('todoForm').reset();

  });

}

export default runApp;
import {elements, prevProject, projects} from "./base";
import Project from "./Project";
import Todo from "./Todo";
import prepareMainUI from "./prepareMainUI";
import allTODOs from "./allTodos";
import todayTODOs from "./today";
import paintTodoItem from "./todoItem";
import updateProjectTitle from "./updateTitle";
import refreshProjectList from "./refreshProjectList";
import updateSelectOptions from "./updateSelectOptions";
import readFormInput from "./readFormInput";


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

  elements.todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const [project, title, desc, ddt, priority] = readFormInput();

    let todo = new Todo(project, title, desc, ddt, priority);

    if (elements.submit.value === 'Create TODO'){
      todo.addTODO();
    }else{
      todo.updateTODO(prevProject[0], project, prevProject[1], title, desc, ddt, priority, prevProject[2])
    }

    prepareMainUI();
    updateProjectTitle(project)
    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(Project.read()[project]).forEach(todo => {
      paintTodoItem({project: project, todo: todo, parent: ul})
    })

   elements.todoForm.reset();

  });

}

export default runApp;
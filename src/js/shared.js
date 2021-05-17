import {elements, projects} from "./base";
import uniqid from "uniqid";
import paintTodoItem from "./todoItem";
import updateProjectTitle from "./updateTitle";
import {readStorage} from "./runApp";

export const toggleMenu = () => {
  elements.menu.addEventListener('click', () => {
    elements.sidebar.classList.toggle('hide');
  });
}

export const toggleAddProjectsForm = () => {
  elements.addProjects.addEventListener('click', (e) => {
    const formStyle = elements.newProjectForm.style;
    formStyle.display = formStyle.display === 'flex' ? 'none' : 'flex';
  });
}

export const updateSelectOptions = () => {
  elements.select.textContent = '';

  Object.entries(projects).forEach( project => {
    const markup = `<option value="${project[0]}">${project[0]}</option>`;

    elements.select.insertAdjacentHTML("beforeend", markup);
  });

};

export const prepareMainUI = () => {
  elements.todoForm.classList.add('hide');
  elements.sidebar.classList.add('hide');
  elements.main.classList.remove('hide');
}

export const renderProjectTODOs = (clsName, title) => {
  document.querySelector(`.${clsName}`).onclick = () => {
    prepareMainUI();
    updateProjectTitle(title)

    const ul = elements.todoListUL;
    ul.textContent = '';

    Object.entries(projects[title]).forEach(todo => {
      paintTodoItem({project: title, todo: todo, parent: ul})
    })
  }
}

export const refreshProjectList = () => {
  Object.entries(projects).forEach( project => {
    let pid = uniqid();
    const markup = `<li class="sb-p-item sb-item sb-item-${pid}">${project[0]}</li>`;
    elements.projectUL.insertAdjacentHTML("beforeend", markup);

    renderProjectTODOs(`sb-item-${pid}`, project[0])

  });
}
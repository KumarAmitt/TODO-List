import {elements, projects} from "./base";
import uniqid from "uniqid";

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

//--------------------------

export const prepareMainUI = () => {
  elements.todoForm.classList.add('hide');
  elements.sidebar.classList.add('hide');
  elements.main.classList.remove('hide');
}

const prepareFormUI = () => {
  elements.main.classList.add('hide');
  elements.todoForm.classList.remove('hide');
}

const selectDefaultOption = (title) => {
  if (title !== 'All TODOs' && title !== 'Today'){
    document.querySelector(`select > option[value="${title}"]`).selected = "true";
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

const renderProjectTODOs = (clsName, title) => {
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

const renderForm = (title, id) => {
  document.querySelector(`.new-todo-${id}`).addEventListener('click', () => {
    prepareFormUI()
    selectDefaultOption(title);
  })
}

export const updateProjectTitle = (title) => {
  let id = uniqid();
  const category = document.querySelector('.category');
  category.textContent = '';

  const markup = `<div class="category-title">${title}</div>
                  <div class="new-todo new-todo-${id}"><i class="fas fa-plus"></i></div>`;

  category.insertAdjacentHTML("beforeend", markup);

  renderForm(title, id);
}

const displayTODOs = (tid, projectName, title, desc, ddt, priorityClass, parent) => {

  const markup = `<li class="td-list-item">
                        <div class="check">
                          <span class="status ${priorityClass}"><i class="fas fa-square"></i></span>
                        </div>
                
                        <div class="info">
                          <div class="title title-${tid}">${title}</div>
                          <div class="info-secondary">
                            <div class="due-dt">${ddt}</div>
                            <div class="btns">
                              <span class="edit"><i class="fas fa-edit"></i></span>
                              <span class="delete"><i class="fas fa-trash-alt"></i></span>
                            </div>
                          </div>
                           <div class="desc desc-${tid} hide">${desc}
                             <span>${projectName}</span>
                           </div>
                        </div>
                      </li>`;
  parent.insertAdjacentHTML('beforeend', markup);
}

export const paintTodoItem = ({project, todo, parent}) => {
  const projectName = project
  const tid = todo[0];
  const title = todo[1].title;
  const desc = todo[1].desc;
  const ddt = todo[1].ddt;
  const priorityClass = todo[1].priority === 'high' ? 'pr-h' : todo[1].priority === 'low' ? 'pr-l' : 'pr-m';

  displayTODOs(tid, projectName, title, desc, ddt, priorityClass, parent);

  document.querySelector(`.title-${tid}`).onclick = () => {
    document.querySelector(`.desc-${tid}`).classList.toggle('hide');
  }
}
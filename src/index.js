import './stylesheets/style.scss';
import uniqid from 'uniqid';
import { elements, projects } from './js/base';
import Todo from "./js/Todo";
import Project from './js/Project'
import {format} from 'date-fns'


elements.menu.addEventListener('click', () => {
  elements.sidebar.classList.toggle('hide');
});

elements.addProject.addEventListener('click', (e) => {
  const formStyle = elements.newProjectForm.style;
  formStyle.display = formStyle.display === 'flex' ? 'none' : 'flex';
});

//Helper
const updateSelectOptions = () => {
  elements.select.textContent = '';

  Object.entries(projects).forEach( project => {
    const markup = `<option value="${project[0]}">${project[0]}</option>`;

    elements.select.insertAdjacentHTML("beforeend", markup);
  });

};

updateSelectOptions();

//------------------------------

//Helper
const prepareMainUI = () => {
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

const renderForm = (title, id) => {
  document.querySelector(`.new-todo-${id}`).addEventListener('click', () => {
    prepareFormUI()
    selectDefaultOption(title);
  })
}

//Helper
const updateProjectTitle = (title) => {
  let id = uniqid();
  const category = document.querySelector('.category');
  category.textContent = '';

  const markup = `<div class="category-title">${title}</div>
                  <div class="new-todo new-todo-${id}"><i class="fas fa-plus"></i></div>`;

  category.insertAdjacentHTML("beforeend", markup);

  renderForm(title, id);
}

//Helper
const renderTODOs = (clsName, project) => {
  document.querySelector(`.${clsName}`).onclick = () => {
    prepareMainUI();
    updateProjectTitle(project[0])

    const ul = document.querySelector('.td-list');
    ul.textContent = '';
    callDisplayTODOs(project, ul);
  }
}


//Helper
const refreshProjectList = () => {
  Object.entries(projects).forEach( project => {
    let pid = uniqid();
    const markup = `<li class="sb-p-item sb-item sb-item-${pid}">${project[0]}</li>`;
    elements.projectUL.insertAdjacentHTML("beforeend", markup);

    renderTODOs(`sb-item-${pid}`, project)
  });
}

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
  console.log(projects);
});

//-------------------------



//Helper
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

//Helper
const callDisplayTODOs= (project, ul) => {

  Object.entries(project[1]).forEach((todos) => {
    const todo = todos[1];

    const tid = todos[0];
    const projectName = project[0];
    const title = todo.title;
    const desc = todo.desc;
    const ddt = todo.ddt;
    const priorityClass = todo.priority === 'high' ? 'pr-h' : todo.priority === 'low' ? 'pr-l' : 'pr-m';

    // console.log(tid, projectName, title, desc, ddt, priorityClass);

    displayTODOs(tid, projectName, title, desc, ddt, priorityClass, ul);

    document.querySelector(`.title-${tid}`).onclick = (e) => {
      document.querySelector(`.desc-${tid}`).classList.toggle('hide');
    }
  });
}

// document.querySelector('.sb-all').addEventListener('click', () => {
//   prepareMainUI();
//   updateProjectTitle('All TODOs');
//
//   const ul = document.querySelector('.td-list');
//   ul.textContent = '';
//
//   Object.entries(projects).forEach((project) => {
//     callDisplayTODOs(project, ul);
//   });
// });

document.querySelector('.sb-all').addEventListener('click', () => {
  prepareMainUI();
  updateProjectTitle('All TODOs');

  const ul = document.querySelector('.td-list');
  ul.textContent = '';

  Object.entries(projects).forEach(project => {
    Object.entries(project[1]).forEach(todo => {
      const projectName = project[0]
      const tid = todo[0];
      const title = todo[1].title;
      const desc = todo[1].desc;
      const ddt = todo[1].ddt;
      const priorityClass = todo[1].priority === 'high' ? 'pr-h' : todo[1].priority === 'low' ? 'pr-l' : 'pr-m';

      displayTODOs(tid, projectName, title, desc, ddt, priorityClass, ul);

      document.querySelector(`.title-${tid}`).onclick = () => {
        document.querySelector(`.desc-${tid}`).classList.toggle('hide');
      }

    })
  })

});


refreshProjectList();

//---------------------------

// TODAY
document.querySelector('.sb-today').addEventListener('click', () => {
  prepareMainUI();
  updateProjectTitle('Today');

  const ul = document.querySelector('.td-list');
  ul.textContent = '';

  Object.entries(projects).filter(p => {
    Object.entries(p[1]).filter(pp => pp[1].ddt.slice(0, 10) === format(new Date(),'yyyy-MM-dd')).forEach(e => {
      console.log(e)
    })
  })
});

//---------------------------

//Helper

const readFormInput = () => {
  const project = document.getElementById('select').value;
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddt = document.getElementById('due-dt').value;
  const priority = document.getElementById('todoForm').elements.priority.value;

  return [project, title, desc, ddt, priority];
}

document.getElementById('todoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const [project, title, desc, ddt, priority] = readFormInput();

  let todo = new Todo(project, title, desc, ddt, priority);
  todo.addTODO();

  elements.todoForm.classList.toggle('hide');
  elements.main.classList.remove('hide')

});

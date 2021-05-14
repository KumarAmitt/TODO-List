import './stylesheets/style.scss';
import uniqid from 'uniqid';
import { elements, projects } from './js/base';
// import Todo from './js/Todo';

elements.menu.addEventListener('click', () => {
  elements.sidebar.classList.toggle('hide');
});

elements.addProject.addEventListener('click', () => {
  const formStyle = elements.newProjectForm.style;
  if (formStyle.display === 'none') formStyle.display = 'flex';
  else formStyle.display = 'none';
});

//Helper
const updateProjectOptions = (projectName) => {
  const markup = `<option value="${projectName}">${projectName}</option>`;
  elements.category.insertAdjacentHTML('beforeend', markup);
};

//Helper
const checkUniqueness = (projectName) => {
  let flag = false
  Object.entries(projects).forEach( project => {
     if (project[0] === projectName)
       flag = true;
  });
 return flag;
}

elements.newPSubmit.addEventListener('click', () => {
  const inputField = document.querySelector('[name = projectName]');
  const projectName = inputField.value;

  if (projectName.length === 0) {
    inputField.placeholder = 'Field can\'t be blank';
  } else if(checkUniqueness(projectName)) {
    inputField.placeholder = 'Project already exists';
  } else {
    const markup = `<li class="sb-p-item sb-item">${projectName}</li>`;
    elements.projectUL.insertAdjacentHTML('beforeend', markup);
    projects[projectName] = {};
    updateProjectOptions(projectName);
  }
  elements.newProjectForm.reset();
  // console.log(projects);
});

document.getElementById('todoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const project = document.getElementById('category').value;
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddt = document.getElementById('due-dt').value;
  const priority = document.getElementById('todoForm').elements.priority.value;

  console.log(`project: ${project}`);
  console.log(`Title: ${title}`);
  console.log(`Desc: ${desc}`);
  console.log(`Due date: ${ddt}`);
  console.log(`Priority: ${priority}`);
});

//Helper
const cleanMainUI = () => {
  elements.main.style.display = 'block';
  document.getElementById('todoForm').style.display = 'none';
  elements.sidebar.classList.add('hide');
}

//Helper
const displayProjectTitle = (title) => {
  document.querySelector('.category-title').textContent = title;
}

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


document.querySelector('.sb-all').addEventListener('click', () => {
  cleanMainUI();
  displayProjectTitle('ALL TODOs')

  const ul = document.querySelector('.td-list');
  ul.textContent = '';

  Object.entries(projects).forEach((project) => {
    Object.entries(project[1]).forEach((todos) => {
      const todo = todos[1];

      const tid = todos[0];
      const projectName = project[0];
      const title = todo.title;
      const desc = todo.desc;
      const ddt = todo.ddt;
      const priorityClass = todo.priority === 'high' ? 'pr-h' : todo.priority === 'low' ? 'pr-l' : 'pr-m';

      displayTODOs(tid, projectName, title, desc, ddt, priorityClass, ul);

      // const markup = `<li class="td-list-item">
      //                   <div class="check">
      //                     <span class="status ${priorityClass}"><i class="fas fa-square"></i></span>
      //                   </div>
      //
      //                   <div class="info">
      //                     <div class="title title-${todos[0]}">${todo.title}</div>
      //                     <div class="info-secondary">
      //                       <div class="due-dt">${todo.ddt}</div>
      //                       <div class="btns">
      //                         <span class="edit"><i class="fas fa-edit"></i></span>
      //                         <span class="delete"><i class="fas fa-trash-alt"></i></span>
      //                       </div>
      //                     </div>
      //                      <div class="desc desc-${todos[0]} hide">${todo.desc}
      //                        <span>${project[0]}</span>
      //                      </div>
      //                   </div>
      //                 </li>`;
      //
      // ul.insertAdjacentHTML('beforeend', markup);

      document.querySelector(`.title-${todos[0]}`).onclick = () => {
        document.querySelector(`.desc-${todos[0]}`).classList.toggle('hide');
      }
    });
  });
});


//Helper
const renderTODOs = (clsName, project) => {
  document.querySelector(`.${clsName}`).onclick = () => {
    cleanMainUI();
    displayProjectTitle(project[0])

    const ul = document.querySelector('.td-list');
    ul.textContent = '';

    Object.entries(project[1]).forEach(todos => {
      const todo = todos[1];

      const tid = todos[0];
      const projectName = project[0];
      const title = todo.title;
      const desc = todo.desc;
      const ddt = todo.ddt;
      const priorityClass = todo.priority === 'high' ? 'pr-h' : todo.priority === 'low' ? 'pr-l' : 'pr-m';

      displayTODOs(tid, projectName, title, desc, ddt, priorityClass, ul);

      document.querySelector(`.title-${todos[0]}`).onclick = () => {
        document.querySelector(`.desc-${todos[0]}`).classList.toggle('hide');
      }

    });


  }
}

//Project List in sidebar Menu
Object.entries(projects).forEach( project => {
  let pid = uniqid();
  const markup = `<li class="sb-p-item sb-item sb-item-${pid}">${project[0]}</li>`;

  elements.projectUL.insertAdjacentHTML("beforeend", markup);

  renderTODOs(`sb-item-${pid}`, project)
});

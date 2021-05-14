import './stylesheets/style.scss';
// import uniqid from 'uniqid';
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

const updateProjectOptions = (projectName) => {
  const markup = `<option value="${projectName}">${projectName}</option>`;
  elements.category.insertAdjacentHTML('beforeend', markup);
};

elements.newPSubmit.addEventListener('click', () => {
  const inputField = document.querySelector('[name = projectName]');
  const projectName = inputField.value;

  if (projectName.length === 0) {
    inputField.placeholder = 'Field can\'t be blank';
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

document.querySelector('.sb-all').addEventListener('click', () => {
  elements.main.style.display = 'block';
  document.getElementById('todoForm').style.display = 'none';
  elements.sidebar.classList.add('hide');

  document.querySelector('.category-title').textContent = 'All TODOs';

  const ul = document.querySelector('.td-list');

  Object.entries(projects).forEach((project) => {
    let pjt = project[0]
    Object.entries(project[1]).forEach((todos) => {
      const todo = todos[1];
      const statusClass = todo.priority === 'high' ? 'pr-h' : todo.priority === 'low' ? 'pr-l' : 'pr-m';

      const markup = `<li class="td-list-item">
                        <div class="check">
                          <span class="status ${statusClass}"><i class="fas fa-square"></i></span>
                        </div>
                
                        <div class="info">
                          <div class="title">${todo.title}</div>
                          <div class="info-secondary">
                            <div class="due-dt">${todo.ddt}</div>
                            <div class="btns">
                              <span class="edit"><i class="fas fa-edit"></i></span>
                              <span class="delete"><i class="fas fa-trash-alt"></i></span>
                            </div>
                          </div>
                        </div>
                      </li>`;

      ul.insertAdjacentHTML('beforeend', markup);
    });
  });
});

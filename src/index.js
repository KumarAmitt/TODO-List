import './stylesheets/style.scss';
import elements from './js/base'

elements.menu.addEventListener('click', () => {
  elements.sidebar.classList.toggle('hide');
});

elements.addProject.addEventListener('click', () => {
  const formStyle = elements.newProjectForm.style;
  if (formStyle.display === 'none') formStyle.display = 'flex';
  else formStyle.display = 'none';
});

const projects = [];

const updateProjectOptions = (projectName) => {
  const markup = `<option value="${projectName}">${projectName}</option>`;
  elements.category.insertAdjacentHTML("beforeend", markup);
}

elements.newPSubmit.addEventListener('click', () => {
  const inputField = document.querySelector('[name = projectName]');
  const projectName = inputField.value;

  if (projectName.length === 0) {
    inputField.placeholder = 'Field can\'t be blank';
  } else {
    const markup = `<li class="sb-p-item sb-item">${projectName}</li>`;
    elements.projectUL.insertAdjacentHTML('beforeend', markup);
    projects.push(projectName);
    updateProjectOptions(projectName);
  }
  elements.newProjectForm.reset();
});

document.getElementById('todoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const project = document.getElementById('category').value;
  const title = document.getElementById('title').value
  const desc = document.getElementById('desc').value;
  const ddt = document.getElementById('due-dt').value;
  const priority = document.getElementById('todoForm').elements.priority.value


  console.log(`project: ${project}`);
  console.log(`Title: ${title}`);
  console.log(`Desc: ${desc}`);
  console.log(`Due date: ${ddt}`);
  console.log(`Priority: ${priority}`);

})
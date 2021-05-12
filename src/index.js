import './stylesheets/style.scss';

const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar'),
  addProject: document.querySelector('.sb-p-title'),
  newProjectForm: document.querySelector('.new-project'),
  newPSubmit: document.querySelector('.new-p-submit'),
  projectUL: document.querySelector('.sb-p-items')
}

elements.menu.addEventListener('click', () => {
  elements.sidebar.classList.toggle('hide')
});

elements.addProject.addEventListener('click', () => {
  const formStyle = elements.newProjectForm.style;
  if (formStyle.display === 'none')
    formStyle.display = 'flex';
  else
    formStyle.display = 'none';
});

elements.newPSubmit.addEventListener('click', () => {
  const inputField = document.querySelector('[name = projectName]');
  let projectName = inputField.value;

  if (projectName.length === 0){
    inputField.placeholder = `Field can't be blank`;
  }else {
    const markup = `<li class="sb-p-item sb-item">${projectName}</li>`;
    elements.projectUL.insertAdjacentHTML("beforeend", markup);
  }

  elements.newProjectForm.reset();
});
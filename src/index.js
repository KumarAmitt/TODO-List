import './stylesheets/style.scss';


const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar'),
  addProject: document.querySelector('.sb-p-title'),
  newProjectForm: document.querySelector('.new-project')
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
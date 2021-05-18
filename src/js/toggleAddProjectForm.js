import { elements } from './base.js';

const toggleAddProjectsForm = () => {
  elements.addProjects.addEventListener('click', () => {
    const formStyle = elements.newProjectForm.style;
    formStyle.display = formStyle.display === 'flex' ? 'none' : 'flex';
  });
};

export default toggleAddProjectsForm;
import { elements } from './base.js';

const toggleAddProjectsForm = () => {
  elements.addProjects.addEventListener('click', () => {
    const upIcon = 'fa-chevron-up';
    const downIcon = 'fa-chevron-down';
    const formStyle = elements.newProjectForm.style;
    const iconClass = elements.addProjectsIcon.classList;

    if (formStyle.display === 'flex') {
      formStyle.display = 'none';
      iconClass.remove(upIcon);
      iconClass.add(downIcon);
    } else {
      formStyle.display = 'flex';
      iconClass.remove(downIcon);
      iconClass.add(upIcon);
    }


  });
};

export default toggleAddProjectsForm;
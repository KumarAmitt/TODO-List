import {elements} from "./base";

const toggleAddProjectsForm = () => {
  elements.addProjects.addEventListener('click', (e) => {
    const formStyle = elements.newProjectForm.style;
    formStyle.display = formStyle.display === 'flex' ? 'none' : 'flex';
  });
}

export default toggleAddProjectsForm;
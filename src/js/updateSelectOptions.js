import { elements } from './base.js';
import Project from './Project.js';

const updateSelectOptions = () => {
  elements.select.textContent = '';

  Object.entries(Project.read()).forEach((project) => {
    const markup = `<option value="${project[0]}">${project[0]}</option>`;

    elements.select.insertAdjacentHTML('beforeend', markup);
  });
};

export default updateSelectOptions;
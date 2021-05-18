import uniqid from 'uniqid';
import Project from './Project.js';
import { elements } from './base.js';
import renderProjectTODOs from './renderProjectTODOs.js';

const refreshProjectList = () => {
  Object.entries(Project.read()).forEach((project) => {
    const pid = uniqid();
    const markup = `<li class="sb-p-item sb-item sb-item-${pid}">${project[0]}</li>`;
    elements.projectUL.insertAdjacentHTML('beforeend', markup);

    renderProjectTODOs(`sb-item-${pid}`, project[0]);
  });
};

export default refreshProjectList;
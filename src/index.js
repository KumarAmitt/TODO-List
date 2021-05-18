import './stylesheets/style.scss';
import toggleMenu from './js/toggleMenu.js';
import toggleAddProjectsForm from './js/toggleAddProjectForm.js';
import updateSelectOptions from './js/updateSelectOptions.js';
import refreshProjectList from './js/refreshProjectList.js';
import runApp from './js/runApp.js';
import allTODOs from "./js/allTodos.js";

const init = () => {
  allTODOs();
  toggleMenu();
  toggleAddProjectsForm();
  updateSelectOptions();
  refreshProjectList();
  runApp();
};

init();

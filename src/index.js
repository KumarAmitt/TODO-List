import './stylesheets/style.scss';
import todayTODOs from './js/today.js';
import toggleMenu from './js/toggleMenu.js';
import toggleAddProjectsForm from './js/toggleAddProjectForm.js';
import updateSelectOptions from './js/updateSelectOptions.js';
import refreshProjectList from './js/refreshProjectList.js';
import runApp from './js/runApp.js';

const init = () => {
  todayTODOs();
  toggleMenu();
  toggleAddProjectsForm();
  updateSelectOptions();
  refreshProjectList();
  runApp();
};

init();

import './stylesheets/style.scss';
import todayTODOs from './js/today'
import toggleMenu from "./js/toggleMenu";
import toggleAddProjectsForm from "./js/toggleAddProjectForm";
import updateSelectOptions from "./js/updateSelectOptions";
import refreshProjectList from "./js/refreshProjectList";
import runApp from "./js/runApp";


const init = () => {
  todayTODOs();
  toggleMenu();
  toggleAddProjectsForm();
  updateSelectOptions();
  refreshProjectList();
  runApp();
}

init();





import './stylesheets/style.scss';
import todayTODOs from './js/today'
import runApp from "./js/runApp";
import {toggleMenu, refreshProjectList, toggleAddProjectsForm, updateSelectOptions} from './js/shared'


const init = () => {
  todayTODOs();
  toggleMenu();
  toggleAddProjectsForm();
  updateSelectOptions();  //Remove
  refreshProjectList();   //Remove
  runApp();
}

init();





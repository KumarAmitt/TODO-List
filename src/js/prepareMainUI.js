import { elements } from './base.js';

const prepareMainUI = () => {
  elements.todoFormDiv.classList.add('hide');
  elements.sidebar.classList.add('hide');
  elements.main.classList.remove('hide');
};

export default prepareMainUI;

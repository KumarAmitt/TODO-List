import {elements} from "./base";

const toggleMenu = () => {
  elements.menu.addEventListener('click', () => {
    elements.sidebar.classList.toggle('hide');
  });
}

export default toggleMenu;
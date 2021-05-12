import './stylesheets/style.scss';


const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar')
}

elements.menu.addEventListener('click', () => {
  elements.sidebar.classList.toggle('hide')
});
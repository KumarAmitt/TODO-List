import Todo from '../src/js/Todo.js';

const readData = () => {
  const data = JSON.parse(localStorage.getItem('projects'));
  return data || {};
};

const writeData = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};
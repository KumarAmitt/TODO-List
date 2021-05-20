import Todo from '../src/js/Todo.js';

const readData = () => {
  const data = JSON.parse(localStorage.getItem('projects'));
  return data || {};
};

const writeData = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};

const projects = {
  'Project ONE': {
    id01: {
      title: 'Conference',
      desc: 'Conference with Project Team',
      ddt: '20-05-2021T15:00',
      priority: 'high',
      status: 'pending',
    },
  },
  'Project TWO': {},
};

writeData(projects);
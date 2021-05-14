export const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar'),
  addProject: document.querySelector('.sb-p-title'),
  newProjectForm: document.querySelector('.new-project'),
  newPSubmit: document.querySelector('.new-p-submit'),
  projectUL: document.querySelector('.sb-p-items'),
  category: document.getElementById('category'),
  main: document.querySelector('main'),
};

export const projects = {
  'Project I': {
    id1: {
      title: 'Project 1, Task 1',
      desc: 'Say hi to everyone',
      ddt: '2021-05-14',
      priority: 'high',
    },
    id2: {
      title: 'Project 1, Task 2',
      desc: 'Say hello to everyone',
      ddt: '2021-05-14',
      priority: 'medium',
    },
  },
  'Project II': {
    id11: {
      title: 'Project 2, Task 1',
      desc: 'Say bye to everyone',
      ddt: '2021-05-14',
      priority: 'high',
    },
    id12: {
      title: 'Project 2, Task 2',
      desc: 'Say good bye to everyone',
      ddt: '2021-05-14',
      priority: 'low',
    },
  },
};
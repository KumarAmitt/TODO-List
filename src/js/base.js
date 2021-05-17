export const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar'),
  addProjects: document.querySelector('.sb-p-title'),
  newProjectForm: document.querySelector('.new-project'),
  newPSubmit: document.querySelector('.new-p-submit'),
  projectUL: document.querySelector('.sb-p-items'),
  select: document.getElementById('select'),
  main: document.querySelector('main'),
  todoForm: document.querySelector('.todo-form'),
  todoListUL: document.querySelector('.td-list'),
  all: document.querySelector('.sb-all'),
  today: document.querySelector('.sb-today'),
};

export let prevProject = [];

export const projects = {
  'Project I': {
    id1: {
      title: 'Project 1, Task 1',
      desc: 'Say hi to everyone',
      ddt: '2021-05-29T16:21',
      priority: 'high',
    },
    id2: {
      title: 'Project 1, Task 2',
      desc: 'Say hello to everyone',
      ddt: '2021-05-16T16:21',
      priority: 'medium',
    },
  },
  'Project II': {
    id11: {
      title: 'Project 2, Task 1',
      desc: 'Say bye to everyone',
      ddt: '2021-05-16T16:21',
      priority: 'high',
    },
    id12: {
      title: 'Project 2, Task 2',
      desc: 'Say good bye to everyone',
      ddt: '2021-05-17T16:21',
      priority: 'low',
    },
  },
};
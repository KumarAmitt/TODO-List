export const elements = {
  menu: document.querySelector('.menu'),
  sidebar: document.querySelector('.sidebar'),
  addProjects: document.querySelector('.sb-p-title'),
  newProjectForm: document.querySelector('.new-project'),
  newPSubmit: document.querySelector('.new-p-submit'),
  projectUL: document.querySelector('.sb-p-items'),
  select: document.getElementById('select'),
  main: document.querySelector('main'),
  todoFormDiv: document.querySelector('.todo-form'),
  todoForm: document.getElementById('todoForm'),
  todoListUL: document.querySelector('.td-list'),
  all: document.querySelector('.sb-all'),
  today: document.querySelector('.sb-today'),
  submit: document.querySelector('.submit')
};

export let prevProject = [];

// export const projects = {};

// export const projects = {
//   'Project I': {
//     id1: {
//       title: 'Project 1, Task 1',
//       desc: 'Say hi to everyone',
//       ddt: '2021-05-29T16:21',
//       priority: 'high',
//       status: 'pending'
//     },
//     id2: {
//       title: 'Project 1, Task 2',
//       desc: 'Say hello to everyone',
//       ddt: '2021-05-16T16:21',
//       priority: 'medium',
//       status: 'pending'
//     },
//   },
//   'Project II': {
//     id11: {
//       title: 'Project 2, Task 1',
//       desc: 'Say bye to everyone',
//       ddt: '2021-05-16T16:21',
//       priority: 'high',
//       status: 'pending'
//     },
//     id12: {
//       title: 'Project 2, Task 2',
//       desc: 'Say good bye to everyone',
//       ddt: '2021-05-17T16:21',
//       priority: 'low',
//       status: 'finish'
//     },
//   },
// };
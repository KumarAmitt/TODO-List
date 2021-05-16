import uniqid from 'uniqid';
import { projects } from './base'

export default class Todo {
  constructor(project, title, desc, ddt, priority) {
    this.pid = uniqid();
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.ddt = ddt;
    this.priority = priority;
  }

  addTODO() {
    projects[this.project][this.pid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority
    }
  }

  // allTodos() {
  //   Object.entries(projects).forEach(project => {
  //     Object.entries(project[1]).forEach(todos => {
  //       const tid = todos[0];
  //       const projectName = project[0];
  //       const title = todos[1].title;
  //       const desc = todos[1].desc;
  //       const ddt = todos[1].priority;
  //       const priorityClass = todos[1].priority === 'high' ? 'pr-h' : todos[1].priority === 'low' ? 'pr-l' : 'pr-m';
  //       console.log(tid, projectName, title, desc, ddt, priorityClass);
  //     })
  //   });
  // }


}
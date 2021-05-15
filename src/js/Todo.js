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
}
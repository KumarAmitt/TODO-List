import uniqid from 'uniqid';
import { projects } from './base'

export default class Todo {
  constructor(project, title, desc, ddt, priority) {
    this.tid = uniqid();
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.ddt = ddt;
    this.priority = priority;
  }

  addTODO() {
    projects[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority
    }
  }

  updateTODO(prevProject, newProject, tid, title, desc, ddt, priority){
    if(prevProject === newProject){
      projects[prevProject][tid] = {
        title: title,
        desc: desc,
        ddt: ddt,
        priority: priority
      }
    }

  }

  deleteTODO(project, tid){
    delete projects[project][tid];
  }
}
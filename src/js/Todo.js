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
    this.status = 'pending';
  }

  addTODO() {
    projects[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority,
      status: this.status
    }
  }

  updateTODO(prevProject, newProject, tid, title, desc, ddt, priority){
    if (prevProject === newProject){
      this._update(prevProject,tid, title, desc, ddt, priority)
    } else {
      delete projects[prevProject][tid];
      this._update(newProject,tid, title, desc, ddt, priority)
    }
  }

  updateStatus(project, tid){
    projects[project][tid].status = projects[project][tid].status === 'finish' ? 'pending' : 'finish';
  }

  deleteTODO(project, tid){
    delete projects[project][tid];
  }

  _update(project, tid, title, desc, ddt, priority){
    projects[project][tid] = {
      title: title,
      desc: desc,
      ddt: ddt,
      priority: priority
    }
  }
}
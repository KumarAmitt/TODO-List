import uniqid from 'uniqid';
import Project from './Project.js';

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
    const data = Project.read();
    data[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority,
      status: this.status,
    };
    Project.write(data);
  }

  static updateTODO(prevProject, newProject, tid, title, desc, ddt, priority, status) {
    const data = Project.read();
    if (prevProject === newProject) {
      this.update(data, prevProject, tid, title, desc, ddt, priority, status);
    } else {
      delete data[prevProject][tid];
      this.update(data, newProject, tid, title, desc, ddt, priority, status);
    }
    Project.write(data);
  }

  static updateStatus(project, tid) {
    const data = Project.read();
    data[project][tid].status = data[project][tid].status === 'finish' ? 'pending' : 'finish';
    Project.write(data);
  }

  static deleteTODO(project, tid) {
    const data = Project.read();
    delete data[project][tid];
    Project.write(data);
  }

  static update(data, project, tid, title, desc, ddt, priority, status) {
    data[project][tid] = {
      title,
      desc,
      ddt,
      priority,
      status,
    };
  }
}
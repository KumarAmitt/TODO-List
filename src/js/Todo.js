import uniqid from 'uniqid';
import Project from "./Project";

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
    let data = Project.read()
    data[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority,
      status: this.status
    }
    Project.write(data);
  }

  updateTODO(prevProject, newProject, tid, title, desc, ddt, priority, status){
    let data = Project.read()
    if (prevProject === newProject){
      this._update(data, prevProject,tid, title, desc, ddt, priority, status)
    } else {
      delete data[prevProject][tid];
      this._update(data, newProject,tid, title, desc, ddt, priority, status)
    }
    Project.write(data);
  }

  updateStatus(project, tid){
    let data = Project.read()
    data[project][tid].status = data[project][tid].status === 'finish' ? 'pending' : 'finish';
    Project.write(data);
  }

  deleteTODO(project, tid){
    let data = Project.read()
    delete data[project][tid];
    Project.write(data);
  }

  _update(data, project, tid, title, desc, ddt, priority, status){
    data[project][tid] = {
      title,
      desc,
      ddt,
      priority,
      status
    }
  }

}
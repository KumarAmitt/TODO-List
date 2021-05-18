import uniqid from 'uniqid';
import Storage from "./Storage";

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
    let data = Storage.read()
    data[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority,
      status: this.status
    }
    Storage.write(data);
  }

  updateTODO(prevProject, newProject, tid, title, desc, ddt, priority, status){
    let data = Storage.read()
    if (prevProject === newProject){
      this._update(data, prevProject,tid, title, desc, ddt, priority, status)
    } else {
      delete data[prevProject][tid];
      this._update(data, newProject,tid, title, desc, ddt, priority, status)
    }
    Storage.write(data);
  }

  updateStatus(project, tid){
    let data = Storage.read()
    data[project][tid].status = data[project][tid].status === 'finish' ? 'pending' : 'finish';
    Storage.write(data);
  }

  deleteTODO(project, tid){
    let data = Storage.read()
    delete data[project][tid];
    Storage.write(data);
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
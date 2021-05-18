import uniqid from 'uniqid';

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
    let data = JSON.parse(localStorage.getItem('projects'));
    data[this.project][this.tid] = {
      title: this.title,
      desc: this.desc,
      ddt: this.ddt,
      priority: this.priority,
      status: this.status
    }
    localStorage.setItem('projects', JSON.stringify(data));
  }

  updateTODO(prevProject, newProject, tid, title, desc, ddt, priority, status){
    let data = JSON.parse(localStorage.getItem('projects'));

    if (prevProject === newProject){
      this._update(data, prevProject,tid, title, desc, ddt, priority, status)
    } else {
      delete data[prevProject][tid];
      this._update(data, newProject,tid, title, desc, ddt, priority, status)
    }
    localStorage.setItem('projects', JSON.stringify(data));
  }

  updateStatus(project, tid){
    let data = JSON.parse(localStorage.getItem('projects'));
    data[project][tid].status = data[project][tid].status === 'finish' ? 'pending' : 'finish';
    localStorage.setItem('projects', JSON.stringify(data));
  }

  deleteTODO(project, tid){
    let data = JSON.parse(localStorage.getItem('projects'));
    delete data[project][tid];
    localStorage.setItem('projects', JSON.stringify(data));
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
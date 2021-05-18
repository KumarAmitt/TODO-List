export default class Project {
  constructor(name) {
    this.name = name;
  }

  addProject() {
    const data = Project.read();
    data[this.name] = {};
    Project.write(data);
  }

  nameIsBlank() {
    return this.name.length === 0;
  }

  checkUniqueness() {
    const data = Project.read();
    return Object.entries(data).every((project) => project[0] !== this.name);
  }

  static read() {
    const data = JSON.parse(localStorage.getItem('projects'));
    return data || {};
  }

  static write(data) {
    localStorage.setItem('projects', JSON.stringify(data));
  }
}
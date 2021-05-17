import {projects} from "./base";

export default class Project {
  constructor(name){
    this.name = name;
  }

  addProject(){
    projects[this.name] = {};
    this.persistData();
  }

  nameIsBlank(){
    return this.name.length === 0
  }

  checkUniqueness(){
   return Object.entries(projects).every( project => project[0] !== this.name);
  }

  persistData(){
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  readStorage(){
    const storage = JSON.parse(localStorage.getItem('projects'));
    return storage;
  }

}
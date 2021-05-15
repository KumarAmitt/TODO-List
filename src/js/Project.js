import {projects} from "./base";

export default class Project {
  constructor(name){
    this.name = name;
  }

  validate(){
    return this.name.length === 0
  }

  checkUniqueness(){
   return Object.entries(projects).some( project => project[0] === this.name);
  }
}
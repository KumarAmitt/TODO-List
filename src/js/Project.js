export default class Project {
  constructor(name){
    this.name = name;
  }

  addProject(){
    let data = JSON.parse(localStorage.getItem('projects'));
    if(data === null)
      data = {}

    data[this.name] = {};
    localStorage.setItem('projects', JSON.stringify(data));
  }

  nameIsBlank(){
    return this.name.length === 0
  }

  checkUniqueness(){
    let data = JSON.parse(localStorage.getItem('projects'));
    return Object.entries(data).every( project => project[0] !== this.name);
  }

  // persistData(){
  //   localStorage.setItem('projects', JSON.stringify(projects));
  // }
}
import Storage from './Storage'

export default class Project {
  constructor(name){
    this.name = name;
  }

  addProject(){
    let data = Storage.read()
    data[this.name] = {};
    Storage.write(data)
  }

  nameIsBlank(){
    return this.name.length === 0
  }

  checkUniqueness(){
    let data = Storage.read()
    return Object.entries(data).every( project => project[0] !== this.name);
  }

}
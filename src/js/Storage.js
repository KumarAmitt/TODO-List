export default class Storage {

  static read() {
    const data = JSON.parse(localStorage.getItem('projects'));
    return data ? data : {};
  }

  static write(data){
    localStorage.setItem('projects', JSON.stringify(data));
  }
}
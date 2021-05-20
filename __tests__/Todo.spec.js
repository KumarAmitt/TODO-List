import Todo from '../src/js/Todo.js';

const readData = () => {
  const data = JSON.parse(localStorage.getItem('projects'));
  return data || {};
};

const writeData = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};

const projects = {
  'Project ONE': {
    id01: {
      title: 'Conference',
      desc: 'Conference with Project Team',
      ddt: '20-05-2021T15:00',
      priority: 'high',
      status: 'pending',
    },
  },
  'Project TWO': {},
};

writeData(projects);

describe('Should create a NEW Todo Object', () => {
  const project = 'Project ONE';
  const title = 'Meeting';
  const desc = 'Board Meeting';
  const ddt = '20-05-2021T15:00';
  const priority = 'high';
  const t = new Todo(project, title, desc, ddt, priority);

  test('should generate tid', () => {
    expect(typeof t.tid).toBe('string');
  });

  test('should set the project property', () => {
    expect(t.project).toBe(project);
  });

  test('should set the title property', () => {
    expect(t.title).toBe(title);
  });

  test('should set the description property', () => {
    expect(t.desc).toBe(desc);
  });

  test('should set the due-date property', () => {
    expect(t.ddt).toBe(ddt);
  });

  test('should set the priority property', () => {
    expect(t.priority).toBe(priority);
  });

  test('should set initial status property as PENDING', () => {
    expect(t.status).toBe('pending');
  });

});


describe('Add a TODO item in localStorage', () => {
  const project = 'Project ONE';
  const title = 'Meeting';
  const desc = 'Board Meeting';
  const ddt = '20-05-2021T15:00';
  const priority = 'high';
  const t = new Todo(project, title, desc, ddt, priority);


});
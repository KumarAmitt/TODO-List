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

  test('should add a NEW TODO item', () => {
    const { tid } = t;
    t.addTODO();
    const data = readData();

    expect(data[project][tid]).toHaveProperty('title');
    expect(data[project][tid]).toHaveProperty('desc');
    expect(data[project][tid]).toHaveProperty('ddt');
    expect(data[project][tid]).toHaveProperty('priority');
    expect(data[project][tid]).toHaveProperty('status');
  });
});

describe('Update the TODO item', () => {
  const prevProject = 'Project ONE';
  const title = 'Conference';
  const desc = 'Conference with Project Team';
  const ddt = '20-05-2021T15:00';
  const priority = 'high';
  const status = 'pending';
  const tid = 'id01';

  test('should update the TODO PROJECT category', () => {
    Todo.updateTODO(prevProject, 'Project TWO', tid, title, desc, ddt, priority, status);
    const data = readData();
    expect(data['Project TWO'][tid].title).toBe(title);
  });

  test('should update the TODO TITLE', () => {
    Todo.updateTODO(prevProject, prevProject, tid, 'New Title', desc, ddt, priority, status);
    const data = readData();
    expect(data[prevProject].id01.title).toBe('New Title');
  });

  test('should update the TODO DESCRIPTION', () => {
    Todo.updateTODO(prevProject, prevProject, tid, title, 'This is new description', ddt, priority, status);
    const data = readData();
    expect(data[prevProject].id01.desc).toBe('This is new description');
  });

  test('should update the TODO DUE-DATE', () => {
    Todo.updateTODO(prevProject, prevProject, tid, title, desc, '30-05-2021T15:00', priority, status);
    const data = readData();
    expect(data[prevProject].id01.ddt).toBe('30-05-2021T15:00');
  });

  test('should update the TODO PRIORITY', () => {
    Todo.updateTODO(prevProject, prevProject, tid, title, desc, ddt, 'low', status);
    const data = readData();
    expect(data[prevProject].id01.priority).toBe('low');
  });

  test('should NOT update the TODO status ', () => {
    Todo.updateTODO(prevProject, prevProject, tid, title, desc, ddt, priority, status);
    const data = readData();
    expect(data[prevProject].id01.status).toBe(status);
  });
});

describe('toggle status', () => {
  const prevStatus = readData()['Project ONE'].id01.status;
  Todo.updateStatus('Project ONE', 'id01');
  const currStatus = readData()['Project ONE'].id01.status;

  test('previous status should be pending', () => {
    expect(prevStatus).toBe('pending');
  });

  test('current status should be finish if it was pending', () => {
    expect(currStatus).toBe('finish');
  });
});
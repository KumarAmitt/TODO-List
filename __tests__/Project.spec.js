import Project from '../src/js/Project.js';

const readData = () => {
  const data = JSON.parse(localStorage.getItem('projects'));
  return data || {};
};

const writeData = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};

describe('should create a Project object', () => {
  const p = new Project('Project ONE');

  test('should set name of Project', () => {
    expect(p.name).toBe('Project ONE');
  });
});

test('should add a NEW Project ', () => {
  new Project('Project THREE').addProject();
  const data = readData();
  expect(data['Project THREE']).toEqual({});
});

describe('nameIsBlank', () => {
  test('Returns true if the name of Project is blank', () => {
    const result = new Project('').nameIsBlank();
    expect(result).toBeTruthy();
  });

  test('Returns false if the name of Project is is NOT blank', () => {
    const result = new Project('My Project').nameIsBlank();
    expect(result).toBeFalsy();
  });


});

describe('checkUniqueness', () => {
  beforeEach(() => {
    const projects = {
      'Project ONE': {},
      'Project TWO': {},
    };
    writeData(projects);
  });

  test('Returns true if the name of Project is is unique', () => {
    const result = new Project('My Project').checkUniqueness();
    expect(result).toBeTruthy();
  });


  test('Returns false if the name of Project is is NOT unique', () => {
    const result = new Project('Project ONE').checkUniqueness();
    expect(result).toBeFalsy();
  });

});
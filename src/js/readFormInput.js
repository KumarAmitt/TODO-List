const readFormInput = () => {
  const project = document.getElementById('select').value;
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddt = document.getElementById('due-dt').value;
  const priority = document.getElementById('todoForm').elements.priority.value;

  return [project, title, desc, ddt, priority];
};

export default readFormInput;

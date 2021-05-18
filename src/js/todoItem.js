import Todo from './Todo.js';
import { elements, prevProject } from './base.js';

const displayTODOs = (tid, projectName, title, desc, ddt, prCls, statusCls, iconClass, parent) => {
  const markup = `<li class="td-list-item td-list-item-${tid}">
                        <div class="check">
                          <span class="status status-${tid} ${prCls}"><i class="fas ${iconClass}"></i></span>
                        </div>
                
                        <div class="info">
                          <div class="title title-${tid} ${statusCls}">${title}</div>
                          <div class="info-secondary">
                            <div class="due-dt">${ddt}</div>
                            <div class="btns">
                              <span class="edit edit-${tid}"><i class="fas fa-edit"></i></span>
                              <span class="delete delete-${tid}"><i class="fas fa-trash-alt"></i></span>
                            </div>
                          </div>
                           <div class="desc desc-${tid} hide">${desc}
                             <span>${projectName}</span>
                           </div>
                        </div>
                      </li>`;
  parent.insertAdjacentHTML('beforeend', markup);
};

const paintTodoItem = ({ project, todo, parent }) => {
  const projectName = project;
  const tid = todo[0];
  const { title } = todo[1];
  const { desc } = todo[1];
  const { ddt } = todo[1];
  const { priority } = todo[1];
  const { status } = todo[1];
  const statusClass = status === 'pending' ? '' : 'st-f';
  const iconClass = status === 'pending' ? 'fa-square' : 'fa-check-square';
  let priorityClass;

  if (todo[1].priority === 'high') {
    priorityClass = 'pr-h';
  } else if (todo[1].priority === 'low') {
    priorityClass = 'pr-l';
  } else {
    priorityClass = 'pr-m';
  }

  displayTODOs(tid, projectName, title, desc, ddt, priorityClass, statusClass, iconClass, parent);

  // description
  document.querySelector(`.title-${tid}`).onclick = () => {
    document.querySelector(`.desc-${tid}`).classList.toggle('hide');
  };

  // change status
  document.querySelector(`.status-${tid}`).onclick = () => {
    Todo.updateStatus(project, tid);

    document.querySelector(`.title-${tid}`).classList.toggle('st-f');

    const check = document.querySelector(`.status-${tid} i`);
    check.className = check.className === 'fas fa-square' ? 'fas fa-check-square' : 'fas fa-square';
  };

  // delete
  document.querySelector(`.delete-${tid}`).addEventListener('click', () => {
    Todo.deleteTODO(project, tid);

    document.querySelector(`.td-list-item-${tid}`).textContent = '';
    document.querySelector(`.td-list-item-${tid}`).style.borderBottom = 'none';
    document.querySelector(`.td-list-item-${tid}`).style.padding = '0';
  });

  document.querySelector(`.edit-${tid}`).addEventListener('click', () => {
    elements.main.classList.add('hide');
    elements.todoFormDiv.classList.remove('hide');

    document.getElementById('title').value = title;
    document.getElementById('desc').value = desc;
    document.getElementById('due-dt').value = ddt;
    document.getElementById('todoForm').elements.priority.value = priority;
    document.querySelector(`select > option[value="${project}"]`).selected = 'true';
    document.querySelector('.submit').value = 'Update TODO';

    prevProject[0] = projectName;
    prevProject[1] = tid;
    prevProject[2] = status;
  });
};
export default paintTodoItem;
import Todo from './Todo';
import {elements, prevProject} from "./base";


const displayTODOs = (tid, projectName, title, desc, ddt, priorityClass, statusClass, iconClass, parent) => {

  const markup = `<li class="td-list-item td-list-item-${tid}">
                        <div class="check">
                          <span class="status status-${tid} ${priorityClass}"><i class="fas ${iconClass}"></i></span>
                        </div>
                
                        <div class="info">
                          <div class="title title-${tid} ${statusClass}">${title}</div>
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
}

const paintTodoItem = ({project, todo, parent}) => {
  const projectName = project
  const tid = todo[0];
  const title = todo[1].title;
  const desc = todo[1].desc;
  const ddt = todo[1].ddt;
  const priorityClass = todo[1].priority === 'high' ? 'pr-h' : todo[1].priority === 'low' ? 'pr-l' : 'pr-m';
  const priority = todo[1].priority;
  const status = todo[1].status;
  const statusClass = status === 'pending' ? '' : 'st-f';
  const iconClass = status === 'pending' ? 'fa-square' : 'fa-check-square'

  displayTODOs(tid, projectName, title, desc, ddt, priorityClass, statusClass, iconClass, parent);

  // description
  document.querySelector(`.title-${tid}`).onclick = () => {
    document.querySelector(`.desc-${tid}`).classList.toggle('hide');
  }

  // change status
  document.querySelector(`.status-${tid}`).onclick = () => {

    new Todo().updateStatus(project, tid);

    document.querySelector(`.title-${tid}`).classList.toggle('st-f');

    let check = document.querySelector(`.status-${tid} i`);
    check.className = check.className === 'fas fa-square' ? 'fas fa-check-square' : 'fas fa-square';
  }

  // delete
  document.querySelector(`.delete-${tid}`).addEventListener('click', () => {
    new Todo().deleteTODO(project, tid);

    document.querySelector(`.td-list-item-${tid}`).textContent = '';
    document.querySelector(`.td-list-item-${tid}`).style.borderBottom = 'none';
    document.querySelector(`.td-list-item-${tid}`).style.padding = '0';

  })

  document.querySelector(`.edit-${tid}`).addEventListener('click', () => {

    elements.main.classList.add('hide');
    elements.todoFormDiv.classList.remove('hide');

    document.getElementById('title').value = title;
    document.getElementById('desc').value = desc;
    document.getElementById('due-dt').value = ddt;
    document.getElementById('todoForm').elements.priority.value = priority;
    document.querySelector(`select > option[value="${project}"]`).selected = "true";
    document.querySelector('.submit').value = 'Update TODO'

    prevProject[0] = projectName;
    prevProject[1] = tid
    prevProject[2] = status

  })

}
export default paintTodoItem;
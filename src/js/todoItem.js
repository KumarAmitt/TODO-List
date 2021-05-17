const displayTODOs = (tid, projectName, title, desc, ddt, priorityClass, parent) => {

  const markup = `<li class="td-list-item">
                        <div class="check">
                          <span class="status status-${tid} ${priorityClass}"><i class="fas fa-square"></i></span>
                        </div>
                
                        <div class="info">
                          <div class="title title-${tid}">${title}</div>
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

  displayTODOs(tid, projectName, title, desc, ddt, priorityClass, parent);

  document.querySelector(`.title-${tid}`).onclick = () => {
    document.querySelector(`.desc-${tid}`).classList.toggle('hide');
  }

  document.querySelector(`.status-${tid}`).onclick = () => {
    document.querySelector(`.title-${tid}`).classList.toggle('st-f');

    let check = document.querySelector(`.status-${tid} i`);
    check.className = check.className === 'fas fa-square' ? 'fas fa-check-square' : 'fas fa-square';
  }



}
export default paintTodoItem;
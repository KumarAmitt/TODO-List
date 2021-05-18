import Project from "./Project";
import uniqid from "uniqid";
import {elements} from "./base";
import renderProjectTODOs from "./renderProjectTODOs";


const refreshProjectList = () => {
  Object.entries(Project.read()).forEach( project => {
    let pid = uniqid();
    const markup = `<li class="sb-p-item sb-item sb-item-${pid}">${project[0]}</li>`;
    elements.projectUL.insertAdjacentHTML("beforeend", markup);

    renderProjectTODOs(`sb-item-${pid}`, project[0])

  });
}

export default refreshProjectList;
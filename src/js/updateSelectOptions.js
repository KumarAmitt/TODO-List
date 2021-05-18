import {elements} from "./base";
import Project from "./Project";

const updateSelectOptions = () => {
  elements.select.textContent = '';

  Object.entries(Project.read()).forEach( project => {
    const markup = `<option value="${project[0]}">${project[0]}</option>`;

    elements.select.insertAdjacentHTML("beforeend", markup);
  });

};

export default updateSelectOptions;
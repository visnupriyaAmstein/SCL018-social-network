import { introPage } from "./components/introPage.js";
import { registerPage } from "./components/registerPage.js";
import { wallPage } from "./components/wallPage.js";
export const routes = (hash) => {
  const rootContainer = document.getElementById("root");
  rootContainer.innerHTML = "";
  if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
    rootContainer.appendChild(introPage());
  } else if (hash === "#/introPage") {
    rootContainer.appendChild(introPage());
  } else if (hash === "#/registerPage") {
    rootContainer.appendChild(registerPage());
  } else if (hash === "#/wallPage") {
    rootContainer.appenChild(wallPage());
  }
};

/*export  const routes = (hash) => {
    const root = document.getElementById('root');
    switch (hash) {
      case '':
      case '#':
      case '#/introPage':
      root.innerHTML = introPage();
      break;
      /*case '#/modal':
      root.innerHTML = modal();
      break;*/

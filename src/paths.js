// import { introPage } from "./components/introPage.js";

// export const routes = (hash) => {
//   const rootContainer = document.getElementById("root");
//   rootContainer.innerHTML = "";
//   if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
//     rootContainer.appendChild(introPage());
//   } else if (hash === "#/introPage") {
//     rootContainer.appendChild(introPage());
//   }
// };

/*export const routes = (hash) => {
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

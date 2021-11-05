//import introPage from "./IntroPage";
const root = document.getElementById("root");
export const wallPage = () => {
  const wallContainer = document.createElement("main");
  wallContainer.className = "wallContainer";
  wallContainer.id = "wallContainer";
  root.appenChild(wallContainer);

  const header = document.createElement("wallHeader");
  header.className = "wallHeader";
  wallContainer.appendChild(header);

  const logo = document.createElement("logoImage");
  logo.className = "logoImage";
  logo.src = "images/logo-petsbook.png";
  header.appenChild(logo);

  const home = document.createElement("section");
  home.className = "homeSection";
  const post = `
  <div class="post-box">
  <p>holaa</p>
  <form id="postBox" class="container-post">
  </form>
  </div>`
  home.innerHTML = post;
  wallContainer.appendChild(home);

  return wallContainer ;
};

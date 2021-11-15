//import introPage from "./IntroPage";
//import { addData } from "../lib/index.js";

export const wallPage = () => {
  const wallContainer = document.createElement("main");
  wallContainer.className = "wallContainer";
  wallContainer.id = "wallContainer";

  const header = document.createElement("header");
  header.className = "wallHeader";
  wallContainer.appendChild(header);

  const logo = document.createElement("img");
  logo.className = "logoImage";
  logo.src = "Images/logowp.png";
  logo.alt = "logo";
  header.appendChild(logo);

  const iconsDiv = document.createElement("div");
  iconsDiv.className = "icons-div";
  header.appendChild(iconsDiv);

  const publishImage = document.createElement("img");
  publishImage.className = "publish-image";
  publishImage.src = "Images/crearpostheader.png";
  iconsDiv.appendChild(publishImage);

  const homeImage = document.createElement("img");
  homeImage.className = "home-image";
  homeImage.src = "Images/homeImage.png";
  iconsDiv.appendChild(homeImage);

  const logOutImage = document.createElement("img");
  logOutImage.className = "logOut-image";
  logOutImage.src = "Images/exitImage.png";
  iconsDiv.appendChild(logOutImage);

  const home = document.createElement("section");
  home.className = "homeSection";
  const post = `
  <div class="post-box">
  
  <div class="home-post" id="homePost"> 
    <div class="like">
    <img  id="" alt="" src="./Images/like.png" />
    </div>
  </div>
  </div>
    <footer class="footer">
    <img class="refresh-home"id="refreshHome" alt="" src="./Images/home.png" />
    <img class="create-post-icon" id="createPostIcon" alt="Publicar" src="./Images/iconcrearpost.png"/>
    <img class="log-out  "id="logOut" alt="exit" src="./Images/exit.png" />
  
    </footer>
  </div>`;
  home.innerHTML = post;
  wallContainer.appendChild(home);
  // wallContainer.querySelector("#button").addEventListener("click", () => {
  //   const postInput = document.getElementById("postText").value;
  //   addData(postInput);
  // });

  return wallContainer;
};

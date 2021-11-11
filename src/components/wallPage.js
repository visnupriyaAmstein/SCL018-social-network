//import introPage from "./IntroPage";
import { addData } from "../lib/index.js"

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
  header.appendChild(logo);

  /*const homeImage = document.createElement("img2");
  homeImage.className = "home-image";
  logo.src = "Images/home.png";
  header.appendChild(homeImage);

  const logOutImage = document.createElement("img3");
  logOutImage.className = "logOut-image";
  logOutImage.src = "Images/exit.png";
  header.appendChild(logOutImage);*/

  const home = document.createElement("section");
  home.className = "homeSection";
  const post = `
  <div class="post-box">
  <form id="postBox" class="container-post">
  <textarea rows="4" name="comment" required id="postText" class="post-text" type="textarea"  placeholder="¿Qué hace tu mascota?"></textarea>
  <div class="boton-imprimir">
  <button id="button">PUBLICAR</button>
  </div>
  </form>
  <div class="home-post" id="homePost"> 
    <div class="like">
    <img  id="" alt="" src="./Images/like.png" />
    </div>
  </div>
  </div>
    <footer class="footer">
    <img class="refresh-home"id="refreshHome" alt="" src="./Images/home.png" />
    <img class="log-out  "id="logOut" alt="exit" src="./Images/exit.png" />
  
    </footer>
  </div>`;
  home.innerHTML = post;
  wallContainer.appendChild(home);
  wallContainer.querySelector("#button").addEventListener("click", ()=>{
    const postInput = document.getElementById("postText").value;
    addData(postInput);
    
  })

  return wallContainer;
};

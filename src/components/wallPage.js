//import introPage from "./IntroPage";
const root = document.getElementById("root");
export const wallPage = () => {
  const wallContainer = document.createElement("main");
  wallContainer.className = "wallContainer";
  wallContainer.id = "wallContainer";
  root.appendChild(wallContainer);

  const header = document.createElement("header");
  header.className = "wallHeader";
  wallContainer.appendChild(header);

  const logo = document.createElement("img");
  logo.className = "logoImage";
  logo.src = "Images/logo.png";
  header.appendChild(logo);

  const home = document.createElement("section");
  home.className = "homeSection";
  const post = `
  <div class="post-box">
  <form id="postBox" class="container-post">
  <textarea required id="postText" class="post-text" type="textarea" rows="4" placeholder="Comparte algo sobre tu mascota"></textarea>
  <div class="senddiv">
  <div class="load-file" >
    <img id="" alt="" src="../src/Images/" />
    <label for="file">IMAGEN</label>
    <input id='file' name="uploadedfile" type="file" hidden/>
  </div>
    <img id="" alt="" src="../src/Images/" />
    <progress class="uploader" id="uploader" value="0" max="100" >0%</progress>
    <button type="button" id="createPostbtn" class="create-post-btn" value"textoBnt><PUBLICAR</button>  
  </div>     
  </form>
  <div class="home-post" id="homePost"> 
    <div class="like">
    <img  id="" alt="" src="../src/Images/like.png" />
    </div>
  </div>
  </div>
    <footer class="footer">
    <img id="" alt="" src="../src/Images/home.png" />
    <img id="" alt="" src="../src/Images/exit.png" />
    <h5>Exit</h5>
    </footer>
  </div>`;
  home.innerHTML = post;
  wallContainer.appendChild(home);

  return wallContainer;
};

import { addData } from "../lib/index.js"
export const postsModal = () => {
  const containerPosts = document.createElement("main");
  containerPosts.className = 'containerPost';

  const headerModal = document.createElement("header");
  headerModal.className = 'headerModal';
  containerPosts.appendChild(headerModal)

  const imgPost = document.createElement("img");
  imgPost.className = 'imgPost';
  imgPost.src = 'images/header32.png'
  headerModal.appendChild(imgPost);

  const logo = document.createElement("img");
  logo.className = "logomodal";
  logo.src = "Images/logo.png";
  //logo.alt = "logo";
  headerModal.appendChild(logo);

  const sectionPost = document.createElement("section");
  sectionPost.className = 'sectionPost';
  sectionPost.innerHTML =`
  <div class="contPost">
  <button id="btnclose" class="btnclose"></button>
  <textarea name="textarea" rows="5" id="postText" class="postText" placeholder="¿Que esta haciendo tu mascota?"></textarea>
  <div class="toPost">
  <button id="btnToPost" class="btnToPost">PUBLICAR</button>
  <button id="btnimg" class="btnimg"></button>
  </div>
  </div>
  `;
  containerPosts.appendChild(sectionPost);
  containerPosts.querySelector("#btnToPost").addEventListener("click", () => {
    const postInput = document.getElementById("postText").value;
    addData(postInput);
    window.location.hash = "#/wallPage";
  });
  containerPosts.querySelector('#btnclose').addEventListener('click', () => {
    window.location.hash = "#/wallPage";
  })

  return containerPosts;
};

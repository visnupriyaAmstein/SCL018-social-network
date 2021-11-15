import { addData } from "../lib/index.js"
export const postsModal = () => {
  const containerPosts = document.createElement("main");
  containerPosts.className = 'containerPost';

  const imgPost = document.createElement("img");
  imgPost.className = 'imgPost';
  imgPost.src = 'images/header-compu.png'
  containerPosts.appendChild(imgPost);

  const sectionPost = document.createElement("section");
  sectionPost.className = 'sectionPost';
  sectionPost.innerHTML =`
  <div class="contPost">
  
  <form id="contPost" class="contPost">
  <input type="text" id="postTextt" class="postTextt"placeholder="hola">
  <div class="toPost">
  <button id="btnToPost" class="btnToPost">PUBLICAR</button>
  <button id="btnimg" class="btnimg"></button>
  </div>
  </form>
  </div>
  `;
  containerPosts.appendChild(sectionPost);
  containerPosts.querySelector("#btnToPost").addEventListener("click", ()=>{
       const postInput = document.getElementById("postTextt").value;
       addData(postInput);
      
  });

  return containerPosts;
}
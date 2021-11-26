import { readData ,manageLike } from './index.js'
import { auth , deletePost, updatePost } from './index.js'

export const showPost = () => {
  readData("posts", callPost);
};

function callPost(posts) {
  const feed = document.getElementById("homePost");
  feed.innerHTML = "";

    const myFunction = (postData) => {
        //let iterator = Object.values(e);
        const viewPost =`
        <div class="container-post">
        <div class="post" id=${postData.element.id}>
        <div class='user-name'>${postData.element.data.name}</div>
        <div class="posts" >${postData.element.data.posts}</div>
        </div>
        <div class="like">
        <button class="btn-like"  id="btnLike" value=${postData.element.id}>
        <span class="likesCounter" >${postData.element.data.likesCounter}Me gusta</span>
        `;
        const viewPost2 = `
        </div>
        </div> 
        `;
        let viewPost3 = ``;

      if (postData.element.data.userId === auth.currentUser.uid) {
        viewPost3 = `<button type = "button" id="btnEdit" class="btnEdit" value="${postData.element.id}"></button>
                  <button type = "button" class="btnDelete" value="${postData.element.id}"></button>`;
      }if (postData.likes === auth.currentUser.uid) {
      const btn = document.querySelectorAll('.btn-like') 
      btn.classList.add('ganadora')
    }
        feed.innerHTML += viewPost + viewPost3 + viewPost2;
    };
    posts.forEach(myFunction);

    
    
    const deleteBtn = feed.querySelectorAll('.btnDelete');
    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", () =>{
            deletePost(btn.value);
        });
    });
    const likeBtn = feed.querySelectorAll(".btn-like");
    likeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const postId = btn.value;
      const userId = auth.currentUser.uid;
      manageLike(postId, userId);
    });
  });

          const postModalEdit = feed.querySelectorAll(".btnEdit");
      postModalEdit.forEach((btn) => {
        btn.addEventListener("click", () =>{
        const postModalEditTem = `
        <input type="checkbox" id="modalEdit">
        <label for="modalEdit" class="modalEdit"></label>
        <div class="modalEditBox">
          <div class="contenedor-modalEditBox">
            <label for="modalEdit">X</label>
            <div class="contenido">
            <textarea name="textarea" rows="5" id="postTextEdit" class="postTextEdit" placeholder="¿Que esta haciendo tu mascota?"></textarea>
              <button id="updateSave" class="updateSave">Guardar</button>
              <button id="cancelUpdate" class="cancelUpdate">Cancelar</button>
            </div>
          </div>
        </div>
      `
    const postId = btn.value;
    const divPost = document.getElementById(postId);
    console.log(divPost);
    const postFeed = divPost.querySelector(".posts");
    const postTextEdit = document.getElementById(btn.value).firstElementChild.textContent;
    console.log(postTextEdit)

    feed.innerHTML = postModalEditTem;

    const updateSave = document.querySelector("#updateSave");
    updateSave.addEventListener("click", ()=>{
      updatePost(postId, postTextEdit);
    })
  })
})
    return feed ;
}

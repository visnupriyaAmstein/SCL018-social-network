import { readData, manageLike } from "./index.js";
import { auth, deletePost, updatePost } from "./index.js";

export const showPost = () => {
  readData("posts", callPost);
};

function callPost(posts) {
  const feed = document.getElementById("homePost");
  feed.innerHTML = "";

  const myFunction = (postData) => {
    //let iterator = Object.values(e);
    const viewPost = `
        <div class="container-post" id="cp-${postData.element.id}">
          <div class="post" id=${postData.element.id}>
          <div class='user-name'>${postData.element.data.name}</div>
          <div class="posts" >${postData.element.data.posts}</div>
        </div>
        <div class="like">
        <div class="likeBtn">
        <button type= "button" class="btn-like"  id="btnLike" value=${postData.element.id}>
        <div class="counterLikes">
        <span class="likesCounter">${postData.element.data.likesCounter} Me gusta</span>
        </div>
        </div>
        `;
    const viewPost2 = `
        </div>
        </div> 
        `;
    let viewPost3 = ``;

    if (postData.element.data.userId === auth.currentUser.uid) {
      viewPost3 = `
      <div class="modifyPostBtns">
      <button type = "button" id="btnEdit" class="btnEdit" value="${postData.element.id}">Edit</button>
      <button type = "button" class="btnDelete" value="${postData.element.id}"></button>
      </div>`;
    }
    // if (manageLike === auth.currentUser.uid) {
    //   const btn = document.querySelectorAll(".btn-like");
    //   btn.classList.toggle("ganadora");
    // }
    feed.innerHTML += viewPost + viewPost3 + viewPost2;
  };
  posts.forEach(myFunction);

  const deleteBtn = feed.querySelectorAll(".btnDelete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      deletePost(btn.value);
    });
  });
  const likeBtn = feed.querySelectorAll(".btn-like");
  likeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("ganadora");
      const postId = btn.value;
      const userId = auth.currentUser.uid;
      manageLike(postId, userId);
    });
  });

  const postModalEdit = feed.querySelectorAll(".btnEdit");
  postModalEdit.forEach((btn) => {
    btn.addEventListener("click", () => {
      const postId = btn.value;
      const divPostId = "cp-" + postId;
      const divPost = feed.querySelector("#" + divPostId);
      const oldPostContent = divPost.querySelector(".posts").textContent;

      const postModalEditTem = `
        <input type="checkbox" id="modalEdit">
        <label for="modalEdit" class="modalEdit"></label>
        <div class="modalEditBox">
          <div class="contenedor-modalEditBox">
            <label for="modalEdit" id="closeModal" >X</label>
            <div class="contenido">
            <textarea name="textarea" rows="5" id="postTxt" class="postTextEdit" ></textarea>
              <button id="updateSave" class="updateSave">Guardar</button>
            </div>
          </div>
        </div>

      `;
      feed.innerHTML = postModalEditTem;

      // const postFeed = divPost.querySelector(".posts");
      let postTextEdit = feed.querySelector("#postTxt");
      postTextEdit.value = oldPostContent;
      const updateSave = document.querySelector("#updateSave");
      updateSave.addEventListener("click", () => {
        updatePost(postId, postTextEdit.value);
        // document.getElementById("modalEdit").checked = false;
        console.log(postTextEdit);
      });
    });
  });
  return feed;
}
}


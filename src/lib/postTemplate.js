import { readData, manageLike } from "./index.js";
import { auth, deletePost } from "./index.js";

export const showPost = () => {
  readData("posts", callPost);
};

function callPost(posts) {
  const feed = document.getElementById("homePost");
  feed.innerHTML = "";

  const myFunction = (postData) => {
    //let iterator = Object.values(e);
    const viewPost = `
    <div class="container-post">
    <div class="post" >
    <div class='user-name'>${postData.element.data.name}</div>
    <div class="posts">${postData.element.data.posts}</div>
    </div>
    <div class="like">
    <button class="btn-like"  id="btnLike" value=${postData.element.id}>
    <span class="likesCounter" value=${postData.element.likesCounter}>Megusta</span>
    </button>
    `;
    const viewPost2 = `
    </div>
    </div> 
    `;
    let viewPost3 = ``;

    if (postData.element.data.userId === auth.currentUser.uid) {
      viewPost3 = `<button type = "button" class="btnEdit" value="${postData.element.id}"></button>
              <button type = "button" class="btnDelete" value="${postData.element.id}"></button>`;
    }
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

  return feed;
}

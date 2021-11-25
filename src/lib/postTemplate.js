import { readData ,manageLike } from './index.js'
import { deletePost } from './index.js'

export const showPost = () => {
  readData("posts", callPost);
};

function callPost(posts) {
    const feed = document.getElementById('homePost');
    feed.innerHTML= '';

    const myFunction = (e) => {
        let iterator = Object.values(e);
        const viewPost =`
        <div class="post">
        <div class='user-name'>${iterator[0].data.name}</div>
        <div class="posts">${iterator[0].data.posts}</div>
        </div>
        <div class="like">
        <button class="btn-like"  id="btnLike" value=${iterator[0].id}>Me Gusta</button>
        <button id='btnDelete' class='btnDelete' value=${iterator[0].id}></button>
        </div>`;

        feed.innerHTML += viewPost ;
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
      manageLike(btn.value);
      alert ('diste me gustas');
    });
    });

    return feed ;
}

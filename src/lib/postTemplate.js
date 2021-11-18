import { readData } from './index.js'

export const showPost = () => {
    readData('posts', callPost);
};

function callPost(posts) {
    console.log(typeof posts);
    //const feed = document.createElement('div');
    const feed = document.getElementById('homePost');
    feed.innerHTML= '';
    //const divPosts  = document.createElement('div');

    const myFunction = (e) => {
        const viewPost =`
        <div class="post">
        <div class='user-name'>${e.name}</div>
        <div class="posts">${e.posts}</div>
        <div class="date">${e.datepost}</div>
        </div>
        <div class="like">
        <img  id="" alt="" src="./Images/like.png" />
        </div>`;
        feed.innerHTML += viewPost;
       // feed.appendChild(postUser);
    };
    posts.forEach(myFunction);
    //feed.appendChild(divPosts);
    console.log(feed);
    return feed ;

}
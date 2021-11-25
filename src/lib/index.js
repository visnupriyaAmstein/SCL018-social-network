import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,

} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDSBFRKHma2773nayUDsvZAbsPsx2JAfNA",
  authDomain: "petsbook-scl018.firebaseapp.com",
  projectId: "petsbook-scl018",
  storageBucket: "petsbook-scl018.appspot.com",
  messagingSenderId: "503375395935",
  appId: "1:503375395935:web:c380a36d665614dfb9efea",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();
const user = auth.currentUser;

export const userRegister = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(userCredential.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      alert ("Tu cuenta a sido creada");
      window.location.hash = "#/introPage";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
};
export const userLogin = (email1, password1) => {
  signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("logged in");
      window.location.hash = "#/wallPage";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Debes escribir tu correo y constraseña");
      console.log(errorCode + errorMessage);
    });
};

export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("logged");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      window.location.hash = "#/introPage"; 
    })
    .catch((error) => {
      console.log(error); 
    });
};
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      if (window.location.hash !== "#/registerPage") {
        logOut();
      }
    }
  });
};

export const addData = async (postInput) => {
  console.log(postInput);
    const docRef = await addDoc(collection(db, "posts"), {
      name: auth.currentUser.displayName,
      posts: postInput,
      datePosted: Timestamp.fromDate(new Date()),
    });
    return docRef;
} 

export const readData = (posts, callback) => {
  const q = query(collection(db, posts), orderBy("datePosted", "desc"));
  onSnapshot(q, (querySnapshot) => {

  
    const postContent = [];
    querySnapshot.forEach((document) => {
      const element = {};
      element['id'] = document.id;
      element['data']= document.data();
      postContent.push({element});
    });
    callback(postContent);
  });
};

export const manageLike = async (uid) => {
  console.log(typeof uid);
  console.log("voy a dar o quitar like al post", uid);
  const auth = getAuth();
  const user = auth.currentUser;
  const likesRef = doc(db, "likes", uid);
  console.log(likesRef);

  if (likesRef.includes(uid)) {
    // Atomically add a new region to the "regions" array field.
    await updateDoc(likesRef, {
      likes: arrayUnion(uid),
    });
  } else {
    // Atomically remove a region from the "regions" array field.
    await updateDoc(likesRef, {
      likes: arrayRemove(uid),
    });
    return manageLike();
    //https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0#update_elements_in_an_array
  }
};


export const deletePost = async (id) => {
  alert ('¿Estas seguro de querer borrar tu post?');
  await deleteDoc(doc(db,'posts', id ))
};

/*export const manageLike = async (uid) => {
  console.log("voy a dar o quitar like al post", uid);
  const auth = getAuth();
  // const user = auth.currentUser;
  const likesRef = doc(db, "posts", "EAPWRurrm2KTrsHpywQb");
  console.log(likesRef);

  // import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

  // const washingtonRef = doc(db, "cities", "");

  // // Atomically add a new region to the "regions" array field.
  await updateDoc(likesRef, {
    likes: arrayUnion(uid),
  });*/

  // // Atomically remove a region from the "regions" array field.
  // await updateDoc(washingtonRef, {
  //     regions: arrayRemove("east_coast")
  // });
  // const user = auth.currentUser;

// const postData = doc.data();
// //el documento de snapshot tiene una propiedad id
// //https://firebase.google.cn/docs/reference/js/firestore_.documentsnapshot.md?hl=es-419#documentsnapshotid
// postData.id = doc.id;

// const likesCounter = postData.likes ? postData.likes.length : 0;

// postData.likesCounter = likesCounter;

// const iLike = postData.likes ? postData.likes.includes(user.uid) : false;
// postData.iLikeIt = iLike;

// postContent.push(postData);}
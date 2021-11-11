// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  // signOut,
  // onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSBFRKHma2773nayUDsvZAbsPsx2JAfNA",
  authDomain: "petsbook-scl018.firebaseapp.com",
  projectId: "petsbook-scl018",
  storageBucket: "petsbook-scl018.appspot.com",
  messagingSenderId: "503375395935",
  appId: "1:503375395935:web:c380a36d665614dfb9efea",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();
// const user = auth.currentUser;
console.log(app);

export const userRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("creado");
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
      console.log(errorCode + errorMessage);
    });
};
export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("logged");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });
};

// export const logOut = () =>{
//   document.querySelector("#logOut").addEventListener("click", () =>{
// signOut(auth).then(() => {
//   console.log(signOut()) // Sign-out successful.
//   window.location.hash = "#/introPage"
// }).catch((error) => {
//   // An error happened.
// });
// })
// }
// export const onAuth = () =>{
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(uid)
//   } else {
//     // User is signed out
//     window.location.hash = "#/introPage"
//   }
// });
// }
export const addData = async (postInput) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      posts: postInput,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().posts}`);
  });
};
readData();

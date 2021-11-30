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
  getDoc,
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
export const user = auth.currentUser;

// Función para registrarte
export const userRegister = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      alert("Tu cuenta a sido creada");
      window.location.hash = "#/introPage";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
};

// Función para iniciar sesión
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

// Iniciar sesión con Google
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

//  Cerrar sesión en la App
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

// Observador
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

// Función para agregar datos a la colección
export const addData = async (postInput) => {
  console.log(postInput);
  const docRef = await addDoc(collection(db, "posts"), {
    name: auth.currentUser.displayName,
    userId: auth.currentUser.uid,
    posts: postInput,
    datePosted: Timestamp.fromDate(new Date()),
    likes: [],
    likesCounter: 0,
  });
  console.log("userId");
  return docRef;
};

// Función para leer los datos de la colección
export const readData = (posts, callback) => {
  const q = query(collection(db, posts), orderBy("datePosted", "desc"));
  onSnapshot(q, (querySnapshot) => {
    const postContent = [];
    querySnapshot.forEach((document) => {
      const element = {};
      element.id = document.id;
      element.data = document.data();
      postContent.push({ element });
    });

    callback(postContent);
  });
};

// función para dar like y contador de los like
export const manageLike = async (id, likesUpdate) => {
  const likesRef = doc(db, "posts", id);
  const docSnap = await getDoc(likesRef);
  const postData = docSnap.data();
  const likesCount = postData.likesCounter;

  if (postData.likes.includes(likesUpdate)) {
    await updateDoc(likesRef, {
      likes: arrayRemove(likesUpdate),
      likesCounter: likesCount - 1,
    });
  } else {
    await updateDoc(likesRef, {
      likes: arrayUnion(likesUpdate),
      likesCounter: likesCount + 1,
    });
  }
};

// función para borrar post
export const deletePost = async (id) => {
  alert("¿Estas seguro de querer borrar tu post?");
  await deleteDoc(doc(db, "posts", id));
};

// función para editar post
export const updatePost = async (id, postTextEdit) => {
  const postEdit = doc(db, "posts", id);
  await updateDoc(postEdit, {
    posts: postTextEdit,
  });
};

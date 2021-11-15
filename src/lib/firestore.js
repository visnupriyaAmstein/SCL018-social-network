// // export const logOut = () =>{
// //   document.querySelector("#logOut").addEventListener("click", () =>{
// // signOut(auth).then(() => {
// //   console.log(signOut()) // Sign-out successful.
// //   window.location.hash = "#/introPage"
// // }).catch((error) => {
// //   // An error happened.
// // });
// // })
// // }
// // export const onAuth = () =>{
// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     // User is signed in, see docs for a list of available properties
// //     // https://firebase.google.com/docs/reference/js/firebase.User
// //     const uid = user.uid;
// //     console.log(uid)
// //   } else {
// //     // User is signed out
// //     window.location.hash = "#/introPage"
// //   }
// // });
// // }
// // export const addData = async (postInput) => {
// //   console.log(postInput);
// //   try {
// //     const docRef = await addDoc(collection(db, "posts"), {
// //       posts: postInput,

// //     });
// //     console.log("Document written with ID: ", docRef.id);
// //   } catch (e) {
// //     console.error("Error adding document: ", e);
// //   }
// // }

// // //addData('postInput');
// // export const readData = async () => {
  
// //   const querySnapshot = await getDocs(collection(db, "posts"));
// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data().posts}`);
// // });
// // }

// // readData();
// export async function addData(variable) {
//     try {
//       const docRef = await addDoc(collection(db, 'post'), {
//         userPost: variable,
//         //datePost: Date(Date.now()),
//       });
//       console.log("Document written with ID: ", docRef.id);
//      } catch (e) {
//        console.error("Error adding document: ", e);
//      }
//   }  
  
//   export const publishPost = (nameCollection, callback) => {
//     const q = query(collection(db, nameCollection));
//     onSnapshot(q, (querySnapshot) => {
//       const posts = [];
//       querySnapshot.forEach((doc) => {
//         posts.push(doc.data().userPost);
//       });
//       callback(posts);
//     });
//   };
// export const readData = async () => {
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data().posts}`);
//     });
//   };
//   readData();
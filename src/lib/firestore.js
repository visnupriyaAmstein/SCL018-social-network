import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore,getDocs,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDSBFRKHma2773nayUDsvZAbsPsx2JAfNA",
  authDomain: "petsbook-scl018.firebaseapp.com",
  projectId: "petsbook-scl018",
  });
  const app = initializeApp();
  const db = getFirestore(app);
  console.log(app);

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
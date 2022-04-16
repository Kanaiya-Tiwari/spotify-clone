// // Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC0ul7X3Aoco8RIMa1JJ6cjevgSiNZobd0",
  authDomain: "disney-clone-28b55.firebaseapp.com",
  projectId: "disney-clone-28b55",
  storageBucket: "disney-clone-28b55.appspot.com",
  messagingSenderId: "371017419387",
  appId: "1:371017419387:web:ad07a63d973b2ef5f030de"
};


// // Initialize Firebase
//  const app = initializeApp(firebaseConfig)


// // const app = !initializeApp.length
// //   ? .initializeApp(firebaseConfig)
// //   : firebase.app();
// const db = getFirestore(app);
//const db = getFirestore(app);

// const db = getFirestore(app);
// export {db};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
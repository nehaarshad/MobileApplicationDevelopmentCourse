// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkG7da9if1dd_8-5ka3zk1hUk-JCwxJnA",
  authDomain: "expensetrackerapp-cceda.firebaseapp.com",
  projectId: "expensetrackerapp-cceda",
  storageBucket: "expensetrackerapp-cceda.firebasestorage.app",
  messagingSenderId: "318459407489",
  appId: "1:318459407489:web:4c5c928fa3e2ad99987180"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeApp(firebaseApp);
export const firebaseDB = initializeApp(firebaseApp);
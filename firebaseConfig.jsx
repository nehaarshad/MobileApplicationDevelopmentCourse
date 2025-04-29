// Import the functions you need from the SDKs you need

import { initializeAuth , getReactNativePersistence, getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXSX6ELsDwQRizOYIT_jiwAnVRXD5Q2V8",
  authDomain: "expensetrackingapp-b4fdd.firebaseapp.com",
  projectId: "expensetrackingapp-b4fdd",
  storageBucket: "expensetrackingapp-b4fdd.firebasestorage.app",
  messagingSenderId: "666584258159",
  appId: "1:666584258159:web:1e4215f823a3471b259f9a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp,{
  persistence: getReactNativePersistence(AsyncStorage),
});
export const firebaseDB = getFirestore(firebaseApp);
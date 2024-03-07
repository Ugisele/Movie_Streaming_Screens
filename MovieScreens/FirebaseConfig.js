// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxgYnndQiH91T-ukDSIKloMdvp3K_nUok",
  authDomain: "moviestreaming-20c35.firebaseapp.com",
  projectId: "moviestreaming-20c35",
  storageBucket: "moviestreaming-20c35.appspot.com",
  messagingSenderId: "624080364433",
  appId: "1:624080364433:web:cd507734fc639f88d63030"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App)
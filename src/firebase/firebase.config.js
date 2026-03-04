// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhdJFvD0XPIcgszAsEE-19QDbcdzXdV8",
  authDomain: "free-mark.firebaseapp.com",
  projectId: "free-mark",
  storageBucket: "free-mark.firebasestorage.app",
  messagingSenderId: "642876733181",
  appId: "1:642876733181:web:2e6445fa69b6c4580af094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
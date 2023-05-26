// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATrpdmJXLYBCDwIZ4u_drHsYxuzjQ364k",
  authDomain: "proyectofrontendreact.firebaseapp.com",
  projectId: "proyectofrontendreact",
  storageBucket: "proyectofrontendreact.appspot.com",
  messagingSenderId: "742211923895",
  appId: "1:742211923895:web:5ce56d5aa651b32009c232",
  measurementId: "G-7Z15E48D9D"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFirebase);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { getFirestore }
export { provider };
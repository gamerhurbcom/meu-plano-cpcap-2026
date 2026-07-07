// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByNf4uv7IkWw6Wb9nnQshxeGnM2oH0Kio",
  authDomain: "cap2026-74371.firebaseapp.com",
  projectId: "cap2026-74371",
  storageBucket: "cap2026-74371.firebasestorage.app",
  messagingSenderId: "320511555252",
  appId: "1:320511555252:web:5bd9c1457c1ab073e689e1",
  measurementId: "G-QWRQB9JXYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
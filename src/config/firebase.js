// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEI_vKnrQ66-VoHohGPi4U1F-q-cHQFDw",
  authDomain: "workspace-b3d1b.firebaseapp.com",
  projectId: "workspace-b3d1b",
  storageBucket: "workspace-b3d1b.firebasestorage.app",
  messagingSenderId: "759647057245",
  appId: "1:759647057245:web:f7019d2323a099d72ea4b4",
  measurementId: "G-0DZXK466MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSl2lE8IyX3Si7yO3DANwxEi_QvgGmvyM",
  authDomain: "codepredator-61d64.firebaseapp.com",
  projectId: "codepredator-61d64",
  storageBucket: "codepredator-61d64.firebasestorage.app",
  messagingSenderId: "29930362164",
  appId: "1:29930362164:web:8421f72af7823fb1598161",
  measurementId: "G-X78ZZZWHPM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
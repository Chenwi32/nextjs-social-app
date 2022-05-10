// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29cVxIvkACanXPW6n1Dyqf4LfeESz0kc",
  authDomain: "next-course-app-ff0cd.firebaseapp.com",
  projectId: "next-course-app-ff0cd",
  storageBucket: "next-course-app-ff0cd.appspot.com",
  messagingSenderId: "680096374635",
  appId: "1:680096374635:web:7342bdf1cbaa0e3476762e",
  measurementId: "G-1M9S0DFFGP",
};

// Initialize Firebase

// In some cases, next might want to run this function twice, thereby initializing the app twice, but we don't want that, so we use the a check before initializing
let app;

app = initializeApp(firebaseConfig);

/* const analytics = getAnalytics(app); */

export const auth = getAuth(app);
export const googleAuthenticationProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);

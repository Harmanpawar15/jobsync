// Import the functions you need from the SDKs you need


import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcUlOeYc1T9l8tqBebykgP7Ee2QK0YL1s",
  authDomain: "jobsync-ce4b7.firebaseapp.com",
  projectId: "jobsync-ce4b7",
  storageBucket: "jobsync-ce4b7.appspot.com",
  messagingSenderId: "510284386074",
  appId: "1:510284386074:web:8c6dd1492f6c7cd2b626a3",
  measurementId: "G-WJ6N5ZWFH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore=getFirestore(app);
const db = getFirestore(app);


 let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


export {firestore ,db, auth, app, firebaseConfig, firebase_app} ;
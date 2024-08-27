// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore=getFirestore(app);
const db = getFirestore(app);

const trackUserRequests = async (userId) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();

    if (userData.requestCount >= 3) {
      return false; // User has exceeded request limit
    } else {
      await updateDoc(userRef, {
        requestCount: userData.requestCount + 1,
      });
      return true; // Request count incremented
    }
  } else {
    await setDoc(userRef, { requestCount: 1 });
    return true; // New user, request count set to 1
  }
};

export {firestore ,db, auth, app, firebaseConfig,  analytics} ;
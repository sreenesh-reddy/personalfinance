// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1cwnpDJuTNELpBRKkPMVNtYsd90F8Lu4",
  authDomain: "expensetracker-27504.firebaseapp.com",
  projectId: "expensetracker-27504",
  storageBucket: "expensetracker-27504.appspot.com",
  messagingSenderId: "204479584573",
  appId: "1:204479584573:web:ab9f984f02002744f70d54",
  measurementId: "G-QS4Q4C27LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db =getFirestore(app);
export const googleProvider = new GoogleAuthProvider()
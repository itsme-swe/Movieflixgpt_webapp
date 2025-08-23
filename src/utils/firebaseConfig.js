// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEo8uZK-LV0G5Qf1X2wPnrYCRYsMf-ej4",
  authDomain: "movieflixgpt-63a34.firebaseapp.com",
  projectId: "movieflixgpt-63a34",
  storageBucket: "movieflixgpt-63a34.firebasestorage.app",
  messagingSenderId: "943895906355",
  appId: "1:943895906355:web:d640467d1227ceb8fafb46",
  measurementId: "G-CJLT786RDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

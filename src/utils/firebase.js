// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFdFqcrGf1JBYJo7e_6tb_n_czEB-fR70",
  authDomain: "netflixgpt-e4850.firebaseapp.com",
  projectId: "netflixgpt-e4850",
  storageBucket: "netflixgpt-e4850.appspot.com",
  messagingSenderId: "543370553194",
  appId: "1:543370553194:web:067dc2b1c0a79cb4fb2713",
  measurementId: "G-GK30HRGC31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
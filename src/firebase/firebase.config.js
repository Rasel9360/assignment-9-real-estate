// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOZ3nFunWmJehhapOUJG14n3laqTUPHuQ",
  authDomain: "nr-holding.firebaseapp.com",
  projectId: "nr-holding",
  storageBucket: "nr-holding.appspot.com",
  messagingSenderId: "1087965004034",
  appId: "1:1087965004034:web:0b3cec2a80697ed4bd421b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
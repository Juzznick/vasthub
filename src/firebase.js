// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUBXV1UURJDUYXA_xIjbugquc8fSfJeJM",
  authDomain: "vasthub-nick.firebaseapp.com",
  projectId: "vasthub-nick",
  storageBucket: "vasthub-nick.appspot.com",
  messagingSenderId: "12822937258",
  appId: "1:12822937258:web:71bbe78e63348000a39ad3",
  measurementId: "G-3FNBL5KW1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)


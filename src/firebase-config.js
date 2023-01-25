// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBySRRJs21BYxOHZqje8AEWNs-yQwj3kOQ",
  authDomain: "chatapp-fde69.firebaseapp.com",
  projectId: "chatapp-fde69",
  storageBucket: "chatapp-fde69.appspot.com",
  messagingSenderId: "55055040565",
  appId: "1:55055040565:web:9cfed508b890e2068bb17c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

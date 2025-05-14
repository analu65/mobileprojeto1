// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8fK1c6rgZaFATbIqz6XDTyxwPWVPrCw8",
  authDomain: "mobile2025-2de26.firebaseapp.com",
  projectId: "mobile2025-2de26",
  storageBucket: "mobile2025-2de26.firebasestorage.app",
  messagingSenderId: "143548578818",
  appId: "1:143548578818:web:3780a6af89a5021fa0bb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const banco = getFirestore(app);
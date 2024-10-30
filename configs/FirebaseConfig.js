// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJxSteUdc3LxNRELm8SIk97pI-D_bFwA",
  authDomain: "prime-business-app.firebaseapp.com",
  projectId: "prime-business-app",
  storageBucket: "prime-business-app.appspot.com",
  messagingSenderId: "698338239869",
  appId: "1:698338239869:web:8051662b797e9b45bd1814",
  measurementId: "G-6M4TCXMZ0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
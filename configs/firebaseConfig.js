// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQAubmGHvprXtMKyAXdFb4pIwz5Lq43Vk",
  authDomain: "react-native-projects-1511b.firebaseapp.com",
  projectId: "react-native-projects-1511b",
  storageBucket: "react-native-projects-1511b.appspot.com",
  messagingSenderId: "958279719236",
  appId: "1:958279719236:web:12c54d0a2203dc64f55f11",
  measurementId: "G-RBW0GD31XX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

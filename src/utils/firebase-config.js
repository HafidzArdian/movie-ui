import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjOLmC8K1IrakS8Hyqknf90qsQEoyCYtM",
  authDomain: "react-netflix-clone-64021.firebaseapp.com",
  projectId: "react-netflix-clone-64021",
  storageBucket: "react-netflix-clone-64021.appspot.com",
  messagingSenderId: "643782420055",
  appId: "1:643782420055:web:beea092aaf5ac674522512",
  measurementId: "G-Y30D5744FN",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

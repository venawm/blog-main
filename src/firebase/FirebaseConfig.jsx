// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1jpRxKTFNeWPmbqUia6gtBRgZZoyuQNc",
  authDomain: "blog-75651.firebaseapp.com",
  databaseURL: "https://blog-75651-default-rtdb.firebaseio.com",
  projectId: "blog-75651",
  storageBucket: "blog-75651.appspot.com",
  messagingSenderId: "353594503691",
  appId: "1:353594503691:web:0c79867e876dd5309b0d0e",
  measurementId: "G-RC4NFZDDJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };

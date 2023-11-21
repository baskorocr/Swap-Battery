import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5D38kCyKk5jJCgXzoziCjSIyOof4j9Bw",
  authDomain: "swap-22ec8.firebaseapp.com",
  databaseURL: "https://swap-22ec8-default-rtdb.firebaseio.com",
  projectId: "swap-22ec8",
  storageBucket: "swap-22ec8.appspot.com",
  messagingSenderId: "1022496127596",
  appId: "1:1022496127596:web:2fbaec8fe105c4448f7649",
  measurementId: "G-8EPDEBT4C5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  // Add this for Realtime Database

// Your existing config
const firebaseConfig = {
  apiKey: "AIzaSyBmMslB2FN7FkhLvWw4eqLsmNmyZ4hFKWQ",
  authDomain: "hackathon-f8a69.firebaseapp.com",
  databaseURL: "https://hackathon-f8a69-default-rtdb.firebaseio.com",  // This is for Realtime DB
  projectId: "hackathon-f8a69",
  storageBucket: "hackathon-f8a69.firebasestorage.app",
  messagingSenderId: "1000010987600",
  appId: "1:1000010987600:web:e64ad517150a4acab6f955"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);  // Initialize Realtime Database

export { auth, database };  // Export database instead of db
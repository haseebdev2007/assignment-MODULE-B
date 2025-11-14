



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from  "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSbtTuEfvTtJIC6JukAC07JZqPetiix7M",
  authDomain: "assignment13-75912.firebaseapp.com",
  projectId: "assignment13-75912",
  storageBucket: "assignment13-75912.firebasestorage.app",
  messagingSenderId: "96129940429",
  appId: "1:96129940429:web:db6df2cc32dd86fbed2284",
  measurementId: "G-CYS7VX4C1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


export const  db  = getDatabase(app);
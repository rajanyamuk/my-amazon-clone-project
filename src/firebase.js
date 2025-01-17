

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg0hYr7Jg4-OCSpyYgNPkbxTIznEO11-Q",
  authDomain: "clone-89e0c.firebaseapp.com",
  projectId: "clone-89e0c",
  storageBucket: "clone-89e0c.firebasestorage.app",
  messagingSenderId: "934115513488",
  appId: "1:934115513488:web:d109db5e388495c0a1f415",
  measurementId: "G-RRFKTKD0EX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


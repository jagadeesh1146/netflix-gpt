// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzagb2ZEXrPJ6jRL0LoXrnWmZ_N8Ai_Hg",
  authDomain: "netflix-gpt-5d887.firebaseapp.com",
  projectId: "netflix-gpt-5d887",
  storageBucket: "netflix-gpt-5d887.firebasestorage.app",
  messagingSenderId: "70577769259",
  appId: "1:70577769259:web:479ae1c3c2da4f0539536e",
  measurementId: "G-SNBCSCPC5F"
};

export const app = initializeApp(firebaseConfig); // ✅ Add this line
export const analytics = getAnalytics();
export const auth = getAuth();

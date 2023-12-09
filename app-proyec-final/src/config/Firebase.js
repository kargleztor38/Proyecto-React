import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhq6xiG3-2--3NhmkBjR6dSo6Hy1A4kTw",
  authDomain: "proyecto-coder-f9c7c.firebaseapp.com",
  projectId: "proyecto-coder-f9c7c",
  storageBucket: "proyecto-coder-f9c7c.appspot.com",
  messagingSenderId: "664451807011",
  appId: "1:664451807011:web:562d54e3309460f09c3e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
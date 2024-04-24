import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatlama.firebaseapp.com",
  projectId: "reactchatlama",
  storageBucket: "reactchatlama.appspot.com",
  messagingSenderId: "737776245184",
  appId: "1:737776245184:web:4a51704a4276a7eefe5025",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

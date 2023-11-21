import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2cOWIK7v9BgxwFM3xXEInLCATCrpvEwU",
  authDomain: "edu-sync-app.firebaseapp.com",
  projectId: "edu-sync-app",
  storageBucket: "edu-sync-app.appspot.com",
  messagingSenderId: "763309034504",
  appId: "1:763309034504:web:e826cd780fd082b2fc55bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
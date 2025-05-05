import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyCJdDAS7BONPcBnqe5z5o3dH2_n_yOyajY",
  authDomain: "psl-tutor-fe5a1.firebaseapp.com",
  projectId: "psl-tutor-fe5a1",
  storageBucket: "psl-tutor-fe5a1.firebasestorage.app",
  messagingSenderId: "1091985720089",
  appId: "1:1091985720089:web:ce76cc4167db2bed423b88",
  measurementId: "G-F960EBXXZ3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Firestore instance

export { app, auth, db }; // ✅ Export db
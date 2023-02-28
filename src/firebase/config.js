import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAmrNs4Vfs_jkMTSPguQJ57ReoACr4bjwY",
  authDomain: "resoluteai-task-ffe7b.firebaseapp.com",
  projectId: "resoluteai-task-ffe7b",
  storageBucket: "resoluteai-task-ffe7b.appspot.com",
  messagingSenderId: "1094578998947",
  appId: "1:1094578998947:web:c5bb0b27f79c80410f3916",
  measurementId: "G-B72B30Y3Z1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export default app;

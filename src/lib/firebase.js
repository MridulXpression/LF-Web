import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCeZ6Amos4mdFf9TzUoDGjnkWlArDBzW0",
  authDomain: "lafetch-11b74.firebaseapp.com",
  projectId: "lafetch-11b74",
  storageBucket: "lafetch-11b74.firebasestorage.app",
  messagingSenderId: "598072306679",
  appId: "1:598072306679:web:19be0971bfb1dd1d8b1cf2",
  measurementId: "G-MC1Z6D2Y3W",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics only on client-side
export const analytics =
  typeof window !== "undefined"
    ? isSupported().then((yes) => (yes ? getAnalytics(app) : null))
    : null;

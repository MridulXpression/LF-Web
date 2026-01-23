import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-gSLyUOzJ_bQ-wDz5x8R9AV4wY23Tcxs",
  authDomain: "la-fetch-3b250.firebaseapp.com",
  projectId: "la-fetch-3b250",
  storageBucket: "la-fetch-3b250.firebasestorage.app",
  messagingSenderId: "656354073125",
  appId: "1:656354073125:web:981e0841a99cb63086fdcc",
  measurementId: "G-5Z80WRYNWN",
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    User
 } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS-V7XUzlW7gbDIpFGieoIeOO7yo-3wV4",
  authDomain: "video-uploader-6e23a.firebaseapp.com",
  projectId: "video-uploader-6e23a",
  appId: "1:885585411254:web:ce8e2a936afc824700ba17",
  measurementId: "G-0TP8P9JGBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
  }
  
  /**
   * Signs the user out.
   * @returns A promise that resolves when the user is signed out.
   */
  export function signOut() {
    return auth.signOut();
  }
  
  /**
   * Trigger a callback when user auth state changes.
   * @returns A function to unsubscribe callback.
   */
  export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }
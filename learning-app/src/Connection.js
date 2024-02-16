// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

//This is a change
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg15-4f326.firebaseapp.com",
  projectId: "cfg15-4f326",
  storageBucket: "cfg15-4f326.appspot.com",
  messagingSenderId: "612880629348",
  appId: "1:612880629348:web:131eb1de32a2ebfe252971",
  measurementId: "G-WP0QDN0Y0M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const dbref = ref(database, "server/saving-data/fireblog");
export const auth = getAuth(app);

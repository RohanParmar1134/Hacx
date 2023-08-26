// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAnalytics } from "../../node_modules/firebase/firebase-analytics";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyB72gbvD-BVBBSIRP4skhW2mP8jaJVKHdo",
  authDomain: "centralz-b7858.firebaseapp.com",
  projectId: "centralz-b7858",
  storageBucket: "centralz-b7858.appspot.com",
  messagingSenderId: "715911716184",
  appId: "1:715911716184:web:c1a3f8cef66ce0bf12192d",
  measurementId: "G-MK9F3WVGFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}
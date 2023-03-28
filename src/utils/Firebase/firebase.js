// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pratheesh-s-netflix.firebaseapp.com",
  projectId: "pratheesh-s-netflix",
  storageBucket: "pratheesh-s-netflix.appspot.com",
  messagingSenderId: "929582991905",
  appId: "1:929582991905:web:aa75117e5ac715dde23160",
  measurementId: "G-XTJ86BDG81",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = FirebaseApp.auth();

export { auth };
export default db;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/storage";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCjU1jidsHePnG-u9HofubQQBekJQPHUI",
  authDomain: "neeleshblog-881e7.firebaseapp.com",
  projectId: "neeleshblog-881e7",
  storageBucket: "neeleshblog-881e7.appspot.com",
  messagingSenderId: "276541816921",
  appId: "1:276541816921:web:ee8431e43c1909c25f3148",
  measurementId: "G-WEJBTHEW2Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db} ;
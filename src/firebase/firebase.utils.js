// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArUNcdmnI89ulIgongmiFpHsty5qvodQs",
  authDomain: "groceasy-2c2ea.firebaseapp.com",
  databaseURL: "https://groceasy-2c2ea.firebaseio.com",
  projectId: "groceasy-2c2ea",
  storageBucket: "groceasy-2c2ea.appspot.com",
  messagingSenderId: "1066473274083",
  appId: "1:1066473274083:web:deda982d1bf1b8a42b23d6",
  measurementId: "G-RKSYYNEVF0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// import {  getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpApxi_7AOD5v0e3_-vxDluXiywKMWk3c",
  authDomain: "codeforte-e0e74.firebaseapp.com",
  projectId: "codeforte-e0e74",
  storageBucket: "codeforte-e0e74.firebasestorage.app",
  messagingSenderId: "703278859012",
  appId: "1:703278859012:web:cc3fa6b1ff9e14fe548651",
  measurementId: "G-1EB5TXL9XY"
};

  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app);

export {app,firestore, auth}


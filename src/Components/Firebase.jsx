import { initializeApp } from "firebase/app";
import {Auth, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDq6DDbxE1_9e232vHzA_oaCU7MrnPVbo0",
  authDomain: "login-firebase-c0300.firebaseapp.com",
  projectId: "login-firebase-c0300",
  storageBucket: "login-firebase-c0300.appspot.com",
  messagingSenderId: "883565134609",
  appId: "1:883565134609:web:72d01d77121719a711c2b0",
  measurementId: "G-0RL6KMMLSG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,app};

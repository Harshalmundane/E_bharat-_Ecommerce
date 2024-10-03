// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBIK_t1ZXFphlH_LMSs0zfctWhh_27u5ds",
  authDomain: "myebharatapp.firebaseapp.com",
  projectId: "myebharatapp",
  storageBucket: "myebharatapp.appspot.com",
  messagingSenderId: "257773974007",
  appId: "1:257773974007:web:83f48e11ad977023343ef2",
  measurementId: "G-QTF2NYN7RQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
export {fireDb,auth } ;
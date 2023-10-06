// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOkF7ZxHD5UsHCLyWOGzDpJp1v_sF3Msw",
  authDomain: "ecommerce-dcc1f.firebaseapp.com",
  projectId: "ecommerce-dcc1f",
  storageBucket: "ecommerce-dcc1f.appspot.com",
  messagingSenderId: "506392856363",
  appId: "1:506392856363:web:554cdb5e50f0266de8676e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };

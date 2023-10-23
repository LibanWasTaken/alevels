// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDquRO57UsJyls5V_XmftKTw5sL5Gf86Zg",
  authDomain: "alevels-794d9.firebaseapp.com",
  projectId: "alevels-794d9",
  storageBucket: "alevels-794d9.appspot.com",
  messagingSenderId: "485730872517",
  appId: "1:485730872517:web:e40489cad6405fcb6cd4ac",
  measurementId: "G-NH7E4PRFS1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

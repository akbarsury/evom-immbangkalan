import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyC0naO0XLYkQFtKpseJuuq9zHQNEK3lAI0",
  authDomain: "imm-bangkalan-2022.firebaseapp.com",
  projectId: "imm-bangkalan-2022",
  storageBucket: "imm-bangkalan-2022.appspot.com",
  messagingSenderId: "1093095263293",
  appId: "1:1093095263293:web:ddf9079336e68715066e54",
  measurementId: "G-6CML4NNDL8",
};

const app = initializeApp(config);

export const db = getFirestore(app);

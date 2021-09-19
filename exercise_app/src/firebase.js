import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export {firebase};
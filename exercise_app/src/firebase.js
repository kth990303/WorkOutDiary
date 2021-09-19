import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
const firestore = initializeApp(firebaseConfig);
const db=getFirestore(firestore);

export {firestore, db};
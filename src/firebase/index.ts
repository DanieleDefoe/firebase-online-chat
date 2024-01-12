import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCC-YlwuOMtFO42jDl3q1uytUnp72JamEo',
  authDomain: 'chat-react-496ad.firebaseapp.com',
  projectId: 'chat-react-496ad',
  storageBucket: 'chat-react-496ad.appspot.com',
  messagingSenderId: '86861103627',
  appId: '1:86861103627:web:071434278eff8ab9747d0e',
  measurementId: 'G-V9H8FQLBTP',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

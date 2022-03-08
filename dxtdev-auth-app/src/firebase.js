
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP__FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP__FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP__FIREBASE_API_ID
}

initializeApp(firebaseConfig);

export const auth = getAuth();
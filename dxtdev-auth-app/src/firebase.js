
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // apiKey: process.env.EACT_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_FIREBASE_AUTHDOMAIN,
    // projectId: process.env.REACT_FIREBASE_PROJECTID,
    // storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_FIREBASE_MESSAGINGSENDERID,
    // appId: process.env.REACT_FIREBASE_API_ID
    apiKey: "AIzaSyB8MJspiQXvEV_1HcjQJXe_GKVFvZYyf7k",
    authDomain: "dxtapp-dev.firebaseapp.com",
    projectId: "dxtapp-dev",
    storageBucket: "dxtapp-dev.appspot.com",
    messagingSenderId: "1044017737345",
    appId: "1:1044017737345:web:7a4c600977bfe4795b2780"
}



// Use this to initialize the firebase App
//const firebaseApp= firebase.initializeApp(firebaseConfig)

// Use these for db & auth
initializeApp(firebaseConfig);

export const auth = getAuth();
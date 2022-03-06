import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.EACT_FIREBASE_API_KEY,
    authDomain: REACT_FIREBASE_AUTHDOMAIN,
    projectId: REACT_FIREBASE_PROJECTID,
    storageBucket: REACT_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_FIREBASE_MESSAGINGSENDERID,
    // databaseURL: REACT_FIREBASE_DATABASEURL,
    appId: REACT_FIREBASE_API_ID
})

export const auth = app.auth()
export default app
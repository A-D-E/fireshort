import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const myFirebase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_RAMLY_API_KEY,
  authDomain: process.env.REACT_APP_RAMLY_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_RAMLY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_RAMLY_STORGAE_BUCKET,
  messagingSenderId: process.env.REACT_APP_RAMLY_MESAGING_SENDER_ID,
  appId: process.env.REACT_APP_RAMLY_APP_ID,
})

const baseDb = myFirebase.firestore()
export const db = baseDb
export default myFirebase

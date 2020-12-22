import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.RAMLY_API_KEY,
  // authDomain: process.env.RAMLY_AUTH_DOMAIN,
  // projectId: process.env.RAMLY_PROJECT_ID,
  // storageBucket: process.env.RAMLY_STORGAE_BUCKET,
  // messagingSenderId: process.env.RAMLY_MESAGING_SENDER_ID,
  // appId: process.env.RAMLY_APP_ID,
  apiKey: 'AIzaSyAR_v0YNidQSzUyUnqNpfwAz_20fFPKzaA',
  authDomain: 'ramly-dev.firebaseapp.com',
  projectId: 'ramly-dev',
  storageBucket: 'ramly-dev.appspot.com',
  messagingSenderId: '833771840186',
  appId: '1:833771840186:web:c88b108fdd4c3a2457d883',
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

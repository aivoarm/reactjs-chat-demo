import firebase from 'firebase'
import "firebase/messaging";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
  
firebase.initializeApp(config)
firebase.messaging()
firebase.firestore().settings({
    timestampsInSnapshots: true
})

firebase.messaging().usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
    "BJSaxXjW_KEJmYJW5mHnMWotOFoC2MbpidqyZy8hZTR5z7SU6lQVgvB-gmWK9ewdpgrm7nT_MtpmRlFH4gaDzTA"
    );
export const Mymessaging = firebase.messaging

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
export const auth = firebase.auth  

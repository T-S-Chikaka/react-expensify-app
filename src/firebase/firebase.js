import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// const config = {
//     apiKey: "AIzaSyBnHzDYc6uvj_BtRxM_-HxeHKzEePyTafM",
//     authDomain: "expensify-a55e8.firebaseapp.com",
//     databaseURL: "https://expensify-a55e8.firebaseio.com",
//     projectId: "expensify-a55e8",
//     storageBucket: "expensify-a55e8.appspot.com",
//     messagingSenderId: "571122891577",
//     appId: "1:571122891577:web:be8520b32fe2e67b5646e8",
//     measurementId: "G-WZ0X4XMJHY"
// };


firebase.initializeApp(config);

// firebase.database().ref().set({
//   name: 'Tatenda Chikaka'
// })

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };




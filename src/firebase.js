import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfEuDxTRoVLLtCpreehqfGCCLcvvM93Qo",
  authDomain: "clone-785ed.firebaseapp.com",
  projectId: "clone-785ed",
  storageBucket: "clone-785ed.appspot.com",
  messagingSenderId: "793957578666",
  appId: "1:793957578666:web:86588ac8f1a0f5bba61dd3",
  measurementId: "G-8LL8QK6W0K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

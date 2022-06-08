import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcULQI5slQUf51rGhzoc60_Gaip5u883M",
  authDomain: "achiever-76e23.firebaseapp.com",
  projectId: "achiever-76e23",
  storageBucket: "achiever-76e23.appspot.com",
  messagingSenderId: "241074095422",
  appId: "1:241074095422:web:958396c640cb4f6a41986f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init individual services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

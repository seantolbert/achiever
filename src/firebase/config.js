import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcULQI5slQUf51rGhzoc60_Gaip5u883M",
  authDomain: "achiever-76e23.firebaseapp.com",
  projectId: "achiever-76e23",
  storageBucket: "achiever-76e23.appspot.com",
  messagingSenderId: "241074095422",
  appId: "1:241074095422:web:958396c640cb4f6a41986f",
};

// init firebase
initializeApp(firebaseConfig);

// init individual services
const db = getFirestore();
const Auth = getAuth();
const Storage = getStorage();

export { db, Auth, Storage };

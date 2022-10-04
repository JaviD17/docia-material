import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsDrk2RWbEzo_BckJCgOzi6lFHTdUG_hI",
  authDomain: "docia-material.firebaseapp.com",
  projectId: "docia-material",
  storageBucket: "docia-material.appspot.com",
  messagingSenderId: "819510744679",
  appId: "1:819510744679:web:eb10bbed66b0e8b8bb66c2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage(app);

const auth = getAuth(app);

export { db, storage, auth };

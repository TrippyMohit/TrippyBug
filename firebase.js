import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBELRfA9qB99ZfNkPF1M9AXolYjJ3pgpQo",
  authDomain: "trippybug-5d7bc.firebaseapp.com",
  projectId: "trippybug-5d7bc",
  storageBucket: "trippybug-5d7bc.appspot.com",
  messagingSenderId: "350771722738",
  appId: "1:350771722738:web:1b8314ac44cad70040d36b",
  measurementId: "G-FZ0KG1RQ6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { auth, db, storage };

//rolled back

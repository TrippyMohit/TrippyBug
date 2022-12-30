// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
export default app;

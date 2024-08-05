// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsHNKF8pswEM15gAgfidqFrS6EgZwpijc",
  authDomain: "inventory-managment-dad1d.firebaseapp.com",
  projectId: "inventory-managment-dad1d",
  storageBucket: "inventory-managment-dad1d.appspot.com",
  messagingSenderId: "574938219795",
  appId: "1:574938219795:web:6159d5febccfd9fef646e6",
  measurementId: "G-BTRC3PS8HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
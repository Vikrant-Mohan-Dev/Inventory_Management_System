// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk01r4k9ottwx5TyGkIK24IDmPOZ3Qxvo",
  authDomain: "inventory-management-system-vk.firebaseapp.com",
  projectId: "inventory-management-system-vk",
  storageBucket: "inventory-management-system-vk.appspot.com",
  messagingSenderId: "740562600638",
  appId: "1:740562600638:web:a3e7c24d7a812f3ceb14ef",
  measurementId: "G-GP79S3HCMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78tugriQgc0xSf_nYKGAQpXO6-U5nOuA",
  authDomain: "wp-final-82996.firebaseapp.com",
  projectId: "wp-final-82996",
  storageBucket: "wp-final-82996.appspot.com",
  messagingSenderId: "1087416126574",
  appId: "1:1087416126574:web:806acda7001e57b36e2a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, storage };

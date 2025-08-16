// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYWF6ZL8IGRE8dreLP8rFsUkddDJJ7JVg",
  authDomain: "netflix-gpt-6d5b3.firebaseapp.com",
  projectId: "netflix-gpt-6d5b3",
  storageBucket: "netflix-gpt-6d5b3.firebasestorage.app",
  messagingSenderId: "623889919190",
  appId: "1:623889919190:web:a963c1bf453953a4b12d77",
  measurementId: "G-W6GYS587R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);
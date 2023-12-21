// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBliocHg_lrF3h5XgibjI63fbOZhK5TZKo",
  authDomain: "task-manager-7afc1.firebaseapp.com",
  projectId: "task-manager-7afc1",
  storageBucket: "task-manager-7afc1.appspot.com",
  messagingSenderId: "41746138903",
  appId: "1:41746138903:web:071e1d09383ca879269952",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

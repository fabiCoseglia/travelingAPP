// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAbbFX2jWqKozteBta1vkd_WsHtfWuJew",
  authDomain: "react-native-816a5.firebaseapp.com",
  projectId: "react-native-816a5",
  storageBucket: "react-native-816a5.appspot.com",
  messagingSenderId: "199431659463",
  appId: "1:199431659463:web:21582653b6f23245d203e2",
  measurementId: "G-7QJJ58KC5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

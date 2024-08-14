// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgCLyWV9650QaTLQc2V4TsPn_D9eOXgfw",
  authDomain: "last-call-687e7.firebaseapp.com",
  projectId: "last-call-687e7",
  storageBucket: "last-call-687e7.appspot.com",
  messagingSenderId: "104572398001",
  appId: "1:104572398001:web:890855d9616d1eb4763590",
  measurementId: "G-X2SSS43GSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGvHNO6ORJBWjeQ6r6R1j5gXxDKx55o0k",
  authDomain: "evolvesv-8a63c.firebaseapp.com",
  databaseURL: "https://evolvesv-8a63c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "evolvesv-8a63c",
  storageBucket: "evolvesv-8a63c.appspot.com",
  messagingSenderId: "16073660584",
  appId: "1:16073660584:web:c3a10c109845acb6590a9d",
  measurementId: "G-HN1D908THM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
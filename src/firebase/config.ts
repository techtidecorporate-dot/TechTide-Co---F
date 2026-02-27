// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2UENaeLn5UJFIT0FOMnl3BImQqIQYNnw",
  authDomain: "techtidecorporatellp.firebaseapp.com",
  databaseURL: "https://techtidecorporatellp-default-rtdb.firebaseio.com",
  projectId: "techtidecorporatellp",
  storageBucket: "techtidecorporatellp.firebasestorage.app",
  messagingSenderId: "500337717347",
  appId: "1:500337717347:web:6cdf0e22e6808f0d7b8856",
  measurementId: "G-RREHJSR3TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { auth, db, storage, database };
export default app;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

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

// Initialize Firestore with persistent cache settings
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

const storage = getStorage(app);
const database = getDatabase(app);

export { auth, db, storage, database };
export default app;
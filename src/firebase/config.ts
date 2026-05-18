import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhAC_UGmEUDkKUYS_VZ4LSg9-rvYAsMBU",
  authDomain: "techtide-corporate-llp-eb187.firebaseapp.com",
  databaseURL: "https://techtide-corporate-llp-eb187-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techtide-corporate-llp-eb187",
  storageBucket: "techtide-corporate-llp-eb187.firebasestorage.app",
  messagingSenderId: "300040868820",
  appId: "1:300040868820:web:6681610e76bff1a9677c41",
  measurementId: "G-L1NRKSV414"
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
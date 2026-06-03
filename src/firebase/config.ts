import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
export default app;
// Separate Firebase configuration for the Appointment Booking System
// This uses a different Firebase project/database than the main TechTide app
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const appointmentFirebaseConfig = {
  apiKey: "AIzaSyB4haQRku6Ald0-Jyk05CizqjdqV1uTiuM",
  authDomain: "appointment-booking-syst-e0105.firebaseapp.com",
  databaseURL: "https://appointment-booking-syst-e0105-default-rtdb.firebaseio.com",
  projectId: "appointment-booking-syst-e0105",
  storageBucket: "appointment-booking-syst-e0105.firebasestorage.app",
  messagingSenderId: "999737682725",
  appId: "1:999737682725:web:60bf927f5f5dae4b15c8cc",
  measurementId: "G-9RZRJXNJSR",
};

// Initialize as a secondary Firebase app (named "appointment-system")
const appointmentApp = initializeApp(appointmentFirebaseConfig, "appointment-system");

// Initialize Firebase services for the appointment system
export const appointmentAuth = getAuth(appointmentApp);
export const appointmentDatabase = getDatabase(appointmentApp);

export default appointmentApp;

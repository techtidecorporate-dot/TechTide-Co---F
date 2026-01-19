// Script to create admin user
// Run this with: node create-admin.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

// Firebase configuration (same as your config)
const firebaseConfig = {
  apiKey: "AIzaSyB2UENaeLn5UJFIT0FOMnl3BImQqIQYNnw",
  authDomain: "techtidecorporatellp.firebaseapp.com",
  databaseURL: "https://techtidecorporatellp-default-rtdb.firebaseio.com",
  projectId: "techtidecorporatellp",
  storageBucket: "techtidecorporatellp.firebasestorage.app",
  messagingSenderId: "500337717347",
  appId: "1:500337717347:web:6cdf0e22e6808f0d7b8856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

async function createAdminUser() {
  const email = 'techtidecorporate@gmail.com';
  const password = 'techtide@123co';
  const name = 'TechTide Admin';

  try {
    console.log('Creating admin user...');
    
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('User created in Firebase Auth:', user.uid);
    
    // Create user profile in Realtime Database
    await set(ref(database, 'users/' + user.uid), {
      username: name,
      email: email,
      role: 'admin',
      createdAt: new Date().toISOString()
    });
    
    console.log('✅ Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role: admin');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log('ℹ️  User already exists. You can sign in with the existing credentials.');
    }
    
    process.exit(1);
  }
}

createAdminUser();

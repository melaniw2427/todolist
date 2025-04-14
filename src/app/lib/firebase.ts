import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
    apiKey: "AIzaSyDWuivPoSBr8vrAwEkcpyhqFu1p2OIrchg",
    authDomain: "todolistprojek-6ecbb.firebaseapp.com",
    projectId: "todolistprojek-6ecbb",
    storageBucket: "todolistprojek-6ecbb.firebasestorage.app",
    messagingSenderId: "758637580979",
    appId: "1:758637580979:web:c16d515af9450c3f2656c6",
    measurementId: "G-Y134GRV28K"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
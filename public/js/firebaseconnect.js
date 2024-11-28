import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyCOXlIYEr0leOW8zRMqR3Kw821gnLMNVKU",
    authDomain: "proyectofinalweb2-86a96.firebaseapp.com",
    projectId: "proyectofinalweb2-86a96",
    storageBucket: "proyectofinalweb2-86a96.firebasestorage.app",
    messagingSenderId: "47184501533",
    appId: "1:47184501533:web:168c73c09c4db82fb6dff4",
    measurementId: "G-TN2V4GS0CY"
  };
  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Conexión a Firebase establecida correctamente.");

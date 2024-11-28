import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOXlIYEr0leOW8zRMqR3Kw821gnLMNVKU",
    authDomain: "proyectofinalweb2-86a96.firebaseapp.com",
    projectId: "proyectofinalweb2-86a96",
    storageBucket: "proyectofinalweb2-86a96.firebasestorage.app",
    messagingSenderId: "47184501533",
    appId: "1:47184501533:web:168c73c09c4db82fb6dff4",
    measurementId: "G-TN2V4GS0CY",
  };

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
document.querySelector(".googleLogin").addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        console.log("Bienvenido:", user.displayName);
    } catch (error) {
        console.error(error);
    }
});

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOXlIYEr0leOW8zRMqR3Kw821gnLMNVKU",
  authDomain: "proyectofinalweb2-86a96.firebaseapp.com",
  projectId: "proyectofinalweb2-86a96",
  storageBucket: "proyectofinalweb2-86a96.firebasestorage.app",
  messagingSenderId: "47184501533",
  appId: "1:47184501533:web:168c73c09c4db82fb6dff4",
  measurementId: "G-TN2V4GS0CY",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para registrar usuarios
async function registerUser(email, password, nombre) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Mostrar éxito y redirigir
    alert(`Usuario ${nombre} registrado con éxito`);
    window.location.href = "ingresa.html";
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    alert(`Error: ${error.message}`);
  }
}

// Función para iniciar sesión con Google
async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Mostrar éxito y redirigir
    alert("Inicio de sesión exitoso con Google");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    alert(`Error: ${error.message}`);
  }
}

// Eventos para el formulario
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".submitRegistro").addEventListener("click", () => {
    const nombre = document.getElementById("registroNombre").value;
    const email = document.getElementById("registroUsuario").value;
    const password = document.getElementById("registroContraseña").value;

    if (nombre && email && password) {
      registerUser(email, password, nombre);
    } else {
      alert("Por favor, completa todos los campos");
    }
  });

  // Botón para iniciar sesión con Google
  document.querySelector(".googleSignIn").addEventListener("click", () => {
    googleSignIn();
  });
});

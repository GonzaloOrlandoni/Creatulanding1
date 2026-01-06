import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importamos Firestore para el catálogo

// Tus credenciales actualizadas según tu captura
const firebaseConfig = {
  apiKey: "AIzaSyCjoqJdfYsnmFYD-v1Um8Z8nu5EZ6M5_po",
  authDomain: "proyectofinal-orlandoni.firebaseapp.com",
  projectId: "proyectofinal-orlandoni",
  storageBucket: "proyectofinal-orlandoni.firebasestorage.app",
  messagingSenderId: "780256390402",
  appId: "1:780256390402:web:2c449fe354457aef26e61b",
  measurementId: "G-D8M1LE0Q10",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos (db) para que ItemListContainer pueda usarla
export const db = getFirestore(app);

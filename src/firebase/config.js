import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Estos datos los sacas de la configuración de tu proyecto en Firebase Console
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-id",
  appId: "tu-app-id",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos para usarla en los componentes
export const db = getFirestore(app);

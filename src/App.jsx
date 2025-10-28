// src/App.jsx

// 1. Importamos los componentes principales
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

// (Ya no necesitamos App.css si lo vaciamos)

function App() {
  // 2. Definimos el mensaje de bienvenida que pide la consigna
  const mensajeBienvenida = "¡Bienvenidos a MiTienda de Hardware!";

  return (
    <div>
      {/* 3. Renderizamos la barra de navegación */}
      <NavBar />

      {/* 4. Renderizamos el contenedor y le pasamos el mensaje por props */}
      <ItemListContainer greeting={mensajeBienvenida} />
    </div>
  );
}

export default App;

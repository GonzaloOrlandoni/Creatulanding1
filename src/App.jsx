// ...otras importaciones...
import ItemDetailContainer from "./components/ItemDetailContainer"; // <-- AÑADIR ESTA LÍNEA
// src/App.jsx

// 1. Importamos los componentes de React Router
import { Routes, Route } from "react-router-dom";

// 2. Importamos los componentes de nuestra app
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
// (Crearemos este componente en el próximo paso)
// import ItemDetailContainer from './components/ItemDetailContainer';

// Importamos el CSS
import "./App.css";

function App() {
  return (
    <div>
      {/* 3. El NavBar se muestra en TODAS las rutas */}
      <NavBar />

      {/* 4. Definimos las rutas */}
      <Routes>
        {/* Ruta Raíz (Home) */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a MiTienda!" />} />

        {/* Ruta de Categoría (Dinámica) */}
        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Filtrado por categoría:" />} />

        {/* Ruta de Detalle de Producto (Dinámica) */}
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <div className="container text-center mt-4">
              <h1>Error 404: Página no encontrada</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
// Componentes de UI
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    /* 1. Proveedor de contexto para manejar el carrito globalmente */
    <CartProvider>
      {/* 2. Enrutador para navegación de SPA */}
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Listado completo de productos */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* CORRECCIÓN: Cambiamos /item/ por /producto/
            para que coincida con el Link de Item.jsx
          */}
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />

          {/* Vista del carrito de compras */}
          <Route path="/cart" element={<Cart />} />

          {/* Formulario de finalización de compra */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Ruta para manejar errores 404 */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

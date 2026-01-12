import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Importamos el provider
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      {/* 1. El Provider envuelve TODA la aplicación */}
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

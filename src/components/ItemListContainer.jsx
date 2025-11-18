// ... otras importaciones ...
import ItemList from "./ItemList"; // <-- AÑADIR ESTA LÍNEA
// src/components/ItemListContainer.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 1. Importamos useParams

// 2. Importamos las funciones para pedir datos (RUTA CORREGIDA)
import { getProducts, getProductsByCategory } from "../data/products";

// 3. Importaremos el componente de presentación (lo creamos en el prox. paso)
// import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  // 4. Estados para los productos y para el "cargando..."
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 5. Usamos useParams para obtener el "idCategoria" de la URL
  const { idCategoria } = useParams();

  // 6. useEffect para pedir los datos cuando el componente se monta o "idCategoria" cambia
  useEffect(() => {
    // Mostramos "Cargando..."
    setLoading(true);

    // 7. Definimos la función asíncrona que pide los datos
    const dataFetcher = idCategoria ? getProductsByCategory(idCategoria) : getProducts();

    // 8. Cuando la Promise se resuelve...
    dataFetcher
      .then((data) => {
        setProducts(data); // Guardamos los productos en el estado
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false); // Ocultamos el "Cargando..."
      });
  }, [idCategoria]); // 9. El array de dependencias: se ejecuta si "idCategoria" cambia

  // 10. Renderizado condicional
  if (loading) {
    return (
      <div className="container text-center mt-4">
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  // 11. Cuando no está cargando, pasamos los productos al componente de presentación
  return (
    <div className="container mt-4">
      <h2>
        {greeting} {idCategoria && idCategoria}
      </h2>
      {/* <ItemList products={products} /> */}
      {/* (Por ahora, vamos a ver la data cruda para probar) */}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

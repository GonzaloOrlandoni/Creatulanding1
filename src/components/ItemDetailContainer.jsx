// ...otras importaciones...
import ItemDetail from "./ItemDetail"; // <-- AÑADIR ESTA LÍNEA
// src/components/ItemDetailContainer.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products"; // Importamos la función

// (Importaremos ItemDetail en el próximo paso)
// import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Estado para UN solo producto
  const [loading, setLoading] = useState(true);

  // 1. useParams para obtener el ID de la URL
  const { idProducto } = useParams();

  // 2. useEffect para buscar ese producto
  useEffect(() => {
    setLoading(true);

    getProductById(idProducto) // 3. Llamamos a la función con ese ID
      .then((data) => {
        setProduct(data); // Guardamos el producto encontrado
      })
      .catch((error) => {
        console.error("Error al buscar producto:", error);
      })
      .finally(() => {
        setLoading(false); // Terminamos de cargar
      });
  }, [idProducto]); // 4. Dependencia: si cambia el ID, volvé a buscar

  // 5. Renderizado condicional
  if (loading) {
    return (
      <div className="container text-center mt-4">
        <h2>Cargando detalle del producto...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center mt-4">
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  // 6. Si todo sale bien, mostramos los datos (por ahora en crudo)
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

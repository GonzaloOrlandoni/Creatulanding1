// src/components/ItemDetail.jsx

import React from "react";
import ItemCount from "./ItemCount"; // 1. Importamos el contador

// Recibimos todas las props del producto
const ItemDetail = ({ name, img, category, description, price, stock }) => {
  // 2. Función que se ejecutará cuando hagan clic en "Agregar al carrito"
  const handleOnAdd = (quantity) => {
    console.log(`¡Se agregaron ${quantity} unidades de ${name} al carrito!`);
    // (En el futuro, aquí llamarías a tu Context para agregar al carrito)
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={img} alt={name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{name}</h2>
          <p className="lead text-muted">Categoría: {category}</p>
          <h4>Precio: ${price}</h4>
          <p>{description}</p>
          <hr />
          <p>Stock disponible: {stock}</p>

          {/* 3. Renderizamos el ItemCount */}
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

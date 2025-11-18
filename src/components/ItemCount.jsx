// src/components/ItemCount.jsx

import React, { useState } from "react";

// Recibe el stock máximo y una función "onAdd" (que usaremos en el futuro)
const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1); // Empezamos en 1

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="input-group mb-3" style={{ maxWidth: "180px" }}>
        <button className="btn btn-outline-secondary" type="button" onClick={decrement}>
          -
        </button>
        <input type="text" className="form-control text-center" value={count} readOnly />
        <button className="btn btn-outline-secondary" type="button" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => onAdd(count)} // Llama a la función onAdd con la cantidad
        disabled={stock === 0} // Deshabilitado si no hay stock
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

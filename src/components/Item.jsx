// src/components/Item.jsx

import { Link } from "react-router-dom";
// Recibimos todas las props del producto con destructuring
const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card h-100">
      {" "}
      {/* h-100 para que todas tengan la misma altura */}
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>

        {/* Este Link es la clave.
          Navega a la ruta /producto/ seguido del ID del producto.
        */}
        <Link to={`/producto/${id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

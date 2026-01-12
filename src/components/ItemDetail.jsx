import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, description, price, stock }) => {  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price };
    addItem(item, quantity); // Agregamos al context global
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={img} alt={name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Precio: ${price}</p>

        {/* Renderizado condicional requerido por la consigna */}
        {quantityAdded > 0 ? (
          <Link to="/cart" className="btn btn-success">Finalizar compra</Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;

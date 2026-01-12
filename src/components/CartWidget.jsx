// src/components/CartWidget.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    // Cambiamos a btn-dark y text-white para asegurar visibilidad constante
    <Link to="/cart" className="btn btn-dark position-relative border-white">
      <i className="bi bi-cart3 text-white" style={{ fontSize: "1.2rem" }}></i>

      {totalQuantity() > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQuantity()}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;

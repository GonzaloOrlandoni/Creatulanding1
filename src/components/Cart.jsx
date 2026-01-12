import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Tu Carrito</h1>
      <div className="list-group">
        {cart.map((p) => (
          <div key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{p.name}</h5>
              <p>Cantidad: {p.quantity} - Precio: ${p.price}</p>
              <p>Subtotal: ${p.quantity * p.price}</p>
            </div>
            <button className="btn btn-danger" onClick={() => removeItem(p.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3>Total: ${totalPrice()}</h3>
        <button className="btn btn-warning me-2" onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;

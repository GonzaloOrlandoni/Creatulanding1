import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalPrecio, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id} style={{ display: "flex", gap: "20px", margin: "10px" }}>
          <h4>{p.name}</h4>
          <p>Cantidad: {p.quantity}</p>
          <p>Precio x unidad: ${p.price}</p>
          <p>Subtotal: ${p.price * p.quantity}</p>
          <button onClick={() => removeItem(p.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrecio}</h3>
      <button onClick={() => clearCart()}>Limpiar Carrito</button>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default Cart;

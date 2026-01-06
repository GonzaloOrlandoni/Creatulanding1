import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Loader from "./Loader"; // Importamos tu componente Loader

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false); // Estado para el loader
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, totalPrecio, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciamos la carga

    const order = {
      buyer: buyer,
      items: cart.map((p) => ({ id: p.id, name: p.name, price: p.price, quantity: p.quantity })),
      total: totalPrecio,
      date: serverTimestamp(),
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    } finally {
      setLoading(false); // Finalizamos la carga
    }
  };

  if (loading) return <Loader />; // Mostramos el loader si está procesando

  if (orderId) {
    return (
      <div className="container">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de seguimiento es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={createOrder}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
        <input type="number" name="phone" placeholder="Teléfono" onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        <button type="submit">Generar Orden</button>
      </form>
    </div>
  );
};

export default Checkout;

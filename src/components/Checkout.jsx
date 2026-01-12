import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buyer, setBuyer] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación: Evitar que se procesen órdenes con el carrito vacío
        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agregá productos para continuar.");
            return;
        }

        setLoading(true);

        // Estructura de la orden según requerimientos de Firestore [cite: 5]
        const order = {
            buyer,
            items: cart.map(p => ({
                id: p.id,
                name: p.name,
                price: p.price,
                quantity: p.quantity
            })),
            total: totalPrice(),
            date: serverTimestamp() // Requisito de registro de fecha [cite: 5]
        };

        try {
            // Generación dinámica del documento en la colección 'orders'
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id); // Brindamos el ID al usuario como éxito [cite: 5]
            clearCart(); // Limpiamos el carrito tras la compra [cite: 4]
        } catch (error) {
            console.error("Error al generar la orden:", error);
            alert("Hubo un error al procesar tu compra. Por favor, reintentá.");
        } finally {
            setLoading(false);
        }
    };

    // Renderizado condicional para Loaders [cite: 5]
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status"></div>
                <h2 className="mt-3">Procesando tu orden...</h2>
            </div>
        );
    }

    // Feedback final con el Order ID [cite: 5]
    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-success" role="alert">
                    <h2 className="alert-heading">¡Compra Exitosa!</h2>
                    <p>Gracias por confiar en nosotros. Tu número de seguimiento es:</p>
                    <h4 className="fw-bold">{orderId}</h4>
                    <hr />
                    <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Finalizar Compra</h2>
                    <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                        <div className="mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej: Juan Pérez" onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="number" name="telefono" className="form-control" placeholder="Ej: 1122334455" onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Ej: usuario@correo.com" onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-2">Confirmar Compra</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

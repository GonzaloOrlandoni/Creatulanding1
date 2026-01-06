import { createContext, useState } from "react";

export const CartContext = createContext();

// Definimos el componente sin exportarlo directamente en la misma línea
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(prev => prev.filter(prod => prod.id !== itemId));
    };

    const clearCart = () => setCart([]);

    const isInCart = (itemId) => cart.some(prod => prod.id === itemId);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrecio = cart.reduce((total, item) => total + (item.quantity * item.price), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrecio }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

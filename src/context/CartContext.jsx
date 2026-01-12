/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => cart.some((prod) => prod.id === id);
  const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id));
  const clearCart = () => setCart([]);
  const totalQuantity = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = () => cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

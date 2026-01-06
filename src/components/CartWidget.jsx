import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img src="/cart-icon.svg" alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;

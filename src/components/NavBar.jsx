import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Mi E-commerce</h1>
      </Link>

      <div className="categories">
        {/* isActive es una propiedad de NavLink que nos permite aplicar estilos si la ruta coincide */}
        <NavLink to="/category/remeras" className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Remeras
        </NavLink>
        <NavLink to="/category/pantalones" className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Pantalones
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;

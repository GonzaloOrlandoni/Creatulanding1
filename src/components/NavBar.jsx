import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div className="container">
    <Link className="navbar-brand" to="/">Mi Tienda</Link>
    <div className="navbar-nav mx-auto">
      <Link className="nav-link mx-2" to="/categoria/remeras">Remeras</Link>
      <Link className="nav-link mx-2" to="/categoria/pantalones">Pantalones</Link>
    </div>
    <CartWidget />
  </div>
</nav>
  );
};

export default NavBar;

// src/components/NavBar.jsx

// 1. Importamos Link en lugar de <a>
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* 2. El logo ahora es un Link a la ruta principal "/" */}
        <Link className="navbar-brand" to="/">
          MiTienda
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. Los enlaces de navegación ahora son Links a las categorías */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/procesadores">
                Procesadores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/placas-video">
                Placas de Video
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/monitores">
                Monitores
              </Link>
            </li>
          </ul>
        </div>

        {/* El CartWidget se queda igual, no es un link aún */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

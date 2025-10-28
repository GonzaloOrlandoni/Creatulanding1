// src/components/NavBar.jsx
import CartWidget from "./CartWidget"; // Importamos el CartWidget

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo/Marca de la tienda */}
        <a className="navbar-brand" href="#">
          MiTienda
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Procesadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placas de Video
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Monitores
              </a>
            </li>
          </ul>
        </div>

        {/* Renderizado de CartWidget (como pide la consigna) */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

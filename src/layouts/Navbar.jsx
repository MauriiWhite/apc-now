import "../styles/Navbar.css";

import { Link, useLocation } from "react-router-dom";

const navigationOptions = [
  { path: "/", label: "Inicio" },
  { path: "/services", label: "Servicios" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed z-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          apc <span>Now</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            {navigationOptions.map(
              (option) =>
                option.path !== location.pathname && (
                  <li key={option.path} className="nav-item">
                    <Link to={option.path} className="nav-link">
                      {option.label}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

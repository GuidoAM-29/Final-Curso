import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';

function Header() {
  return (
    <header className="header-nav">
      <nav className="nav-links">
        <Link to="/inicio" className="nav-link">Inicio</Link>
        <Link to="/psicologos" className="nav-link">Psicologos</Link>
        <Link to="/foro" className="nav-link">Foro</Link>
        <Link to="/consejos" className="nav-link">Consejos</Link>
        <Link to="/usuario" className="nav-link">Editar Usuario</Link>
        <Link to="/main" className="nav-link">Main</Link>
      </nav>
    </header>
  );
}

export default Header;

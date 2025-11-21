import React from "react";
import { Link } from "react-router-dom";
import "../styles/Inicio.css";

function  CompInicio() {
  return (
    <div className="Container">
      <div className="header">
        <div className="Icon">💚</div>
        <h1  className="title animate-entry">MindLink</h1>
        <p className="Subtitle">Red de Apoyo Psicologico Comunitario</p>
      </div>

      <div className="contenidoPrincipal">
        <h2 className="Subtitulo">Bienvenido a tu espacio seguro</h2>
        <p className="descripcion">
          Conecta, comparte y encuentra apoyo en nuestra comunidad
        </p>
        <div className="Buttons">
          <Link to="/login"><button className="btn btn-primary">Iniciar Sesión</button></Link>
          <Link to="/"><button className="btn btn-secondary">Registrarse</button></Link>
        </div>
      </div>
    </div>
  );
}

export default CompInicio;

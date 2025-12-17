import React from "react";
import "../styles/DoctorCard.css";

export default function CardDoctor({icon,nombre,cuentaCreada,genero,agendar}) {
  return (
    <div className="card">
      <div className="card-avatar">{icon}</div>

      <h2 className="card-name">{genero} {nombre}</h2>

      <span className="card-tag">Psicologo</span>

      <div className="card-rating">
        {cuentaCreada}
      </div>

      <p className="card-description">
        MindLink
      </p>
      <div>
        <button className="btn-agendar"
            onClick={agendar}
        >Agendar Cita</button>
      </div>
    </div>
  );
}

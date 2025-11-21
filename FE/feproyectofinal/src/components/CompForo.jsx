import React from "react";
import "../styles/Foro.CSS"

function CompForo() {
  return (
    <div className="foro-container">
      <header className="foro-header">
        <button className="back-button">←</button>
        <div className="foro-title">
          <img src="bubble-icon.png" alt="Foro icon" className="foro-icon" />
          <strong>Foro Comunitario</strong>
        </div>
      </header>
      <div className="new-post-button-container">
        <button className="new-post-button">✍️ Nueva Publicación</button>
      </div>
      <div className="empty-publications">
        <img src="document-pencil-icon.png" alt="Icono de nueva publicación" />
        <p>Aún no hay publicaciones. ¿Quieres hacer una?</p>
      </div>
    </div>
  );
}

export default CompForo;

import React from "react";
import "../styles/AdminPage.css";

function AdminPage() {
  return (
    <div className="Admin">
      <h1>Panel de Administración</h1>
      <div className="dashboard-metrics">
        <div className="metric-box">
          <h3>Total Publicaciones</h3>
          <p>0</p>
        </div>
        <div className="metric-box">
          <h3>Consejos Activos</h3>
          <p>0</p>
        </div>
        <div className="metric-box">
          <h3>Psicólogos</h3>
          <p>0</p>
        </div>
        <div className="metric-box">
          <h3>Pendientes Revisión</h3>
          <p>0</p>
        </div>
      </div>

      <div className="forum-section">
        <nav className="forum-tabs">
          <button className="tab active">Foro</button>
          <button className="tab">Consejos</button>
          <button className="tab">Psicólogos</button>
        </nav>

        
      </div>
    </div>
  );
}

export default AdminPage;

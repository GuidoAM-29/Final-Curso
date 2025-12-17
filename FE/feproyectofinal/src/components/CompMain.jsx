import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Main.css";

function CompMain() {
  const navigate = useNavigate();
  const [rol,setRol] = useState(localStorage.getItem("rol"))
  return (
    <div className="main-container">
      <header className="header">
        <nav className="navbar">
          <Link to="/foro" className="nav-link">Foro</Link>
          <Link to="/consejos" className="nav-link">Consejos</Link>
          <Link to="/profesionales" className="nav-link">Psicologos</Link>
        </nav>
        <div className="header-buttons">
          <button className="edit-profile-button" onClick={() => navigate('/usuario')}>Editar perfil</button>
          {rol=="Admin"&&(
          <button className="edit-profile-button" onClick={() => navigate('/administración')}>Admin</button>
          )}
          <button className="logout-button" onClick={() => { localStorage.clear(); navigate('/inicio'); }}>Cerrar sesión</button>
        </div>
      </header>

      <main className="main-panel">
        <h2>Panel Principal 😊</h2>
        <p>¿Qué te gustaría hacer hoy? 🌟</p>

        <section className="section-community-professionals">
          <div className="community-forum">
            <h3>💬 Foro Comunitario</h3>
            <p>
              Comparte tus experiencias, lee historias de otros y ofrece apoyo a
              la comunidad
            </p>
            <a href="/foro">Ir al foro</a>
          </div>

          <div className="professionals-panel">
            <h3>👨‍⚕️ Profesionales</h3>
            <p>
              Conecta con psicólogos y voluntarios certificados para sesiones
              personalizadas
            </p>
            <a href="/profesionales">Ver profesionales</a>
          </div>
        </section>

        <section className="section-resources-support">
          <div className="resources-tips">
            <h3>📚 Recursos y Consejos</h3>
            <p>
              Encuentra tips, técnicas y estrategias para cuidar tu salud mental
            </p>
            <a href="/consejos">Ver recursos →</a>
          </div>
        </section>

        <div className="appointments-button">
          <button onClick={() => navigate('/Citas')}>📅 Ver mis citas programadas</button>
        </div>
      </main>
    </div>
  );
}

export default CompMain;

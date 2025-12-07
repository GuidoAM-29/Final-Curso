import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";

function CompMain() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <header className="header">
        <button className="edit-profile-button" onClick={() => navigate('/usuario')}>Editar perfil</button>
        <button className="logout-button" onClick={() => { localStorage.clear(); navigate('/inicio'); }}>Cerrar sesión</button>
      </header>

      <main className="main-panel">
        <h2>Panel Principal</h2>
        <p>¿Qué te gustaría hacer hoy?</p>

        <section className="section-community-professionals">
          <div className="community-forum">
            <h3>Foro Comunitario</h3>
            <p>
              Comparte tus experiencias, lee historias de otros y ofrece apoyo a
              la comunidad
            </p>
            <a href="/foro">Ir al foro</a>
          </div>

          <div className="professionals-panel">
            <h3>Profesionales</h3>
            <p>
              Conecta con psicólogos y voluntarios certificados para sesiones
              personalizadas
            </p>
            <a href="/profesionales">Ver profesionales</a>
          </div>
        </section>

        <section className="section-resources-support">
          <div className="resources-tips">
            <h3>Recursos y Consejos</h3>
            <p>
              Encuentra tips, técnicas y estrategias para cuidar tu salud mental
            </p>
            <a href="/consejos">Ver recursos →</a>
          </div>

          <div className="specialized-support">
            <h3>Apoyo Especializado</h3>
            <p>
              Espacio dedicado para personas con autismo, síndrome de Down y
              otras necesidades especiales
            </p>
            <a href="/apoyo-especializado">Acceder →</a>
          </div>
        </section>

        <div className="appointments-button">
          <button>Ver mis citas programadas</button>
        </div>
      </main>
    </div>
  );
}

export default CompMain;

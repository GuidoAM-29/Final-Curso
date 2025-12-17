import React, { useState, useEffect } from "react";
import "../styles/AdminPage.css";
import { deleteDataAutenticado, getData, getDataAutenticado } from "../services/fetch";
import CompAdminForo from "./CompAdminForo";
import TablaPsicologos from "./TablaPsicologos";

function CompAdminPage() {
  const [activeTab, setActiveTab] = useState("Foro");

  const [totalPublicaciones, setTotalPublicaciones] = useState(0);
  const [recursosDisponibles, setRecursosDisponibles] = useState(0);
  const [totalPsicologos, setTotalPsicologos] = useState(0);

  const [infoPublicaciones, setInfoPublicaciones] = useState([]);
  const [recursos, setRecursos] = useState([]);

  const [psicologos, setPsicologos] = useState([]);

  useEffect(() => {
    async function traerInfoPanel() {
      const publicaciones = await getDataAutenticado("foro/crear-publicacion/");
      setTotalPublicaciones(publicaciones.length);
      setInfoPublicaciones(publicaciones);

      const psicologos = await getData("usuarios/crear-usuario/");
      const filtroPsicologos = psicologos.filter(
        (usuario) => usuario.rol === "Psicologo"
      );
      setTotalPsicologos(filtroPsicologos.length);
      setPsicologos(filtroPsicologos);

      const recursos = await getData("foro/crear-recursos/");
      setRecursosDisponibles(recursos.length);
      setRecursos(recursos);
    }

    traerInfoPanel();
  }, []);

  const formatoFecha = (fecha) => {
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    const fechaObj = new Date(fecha);
    return fechaObj.toLocaleDateString("es-ES", opciones);
  };

  const eliminarpublicacion = async(id) => {
    const eliminar = await deleteDataAutenticado(`foro/eliminar-publicacion/${id}/`);
    console.log(eliminar);
    if(elminar){
      const publicacionesActualizadas = infoPublicaciones.filter((post) => post.id !== id);
      setInfoPublicaciones(publicacionesActualizadas);
      setTotalPublicaciones(publicacionesActualizadas.length);
    }
  }

  const eliminarRecurso = async(id) => {
    const eliminar = await deleteDataAutenticado(`foro/eliminar-recursos/${id}/`);
    console.log(eliminar);
    if(eliminar){
      const recursosActualizados = recursos.filter((recurso) => recurso.id !== id);
      setRecursos(recursosActualizados);
      setRecursosDisponibles(recursosActualizados.length);
    }
  }

  return (
    <div className="Admin">
      <h1>Panel de Administración</h1>

      <div className="dashboard-metrics">
        <div className="metric-box">
          <h3>Total Publicaciones</h3>
          <p>{totalPublicaciones}</p>
        </div>

        <div className="metric-box">
          <h3>Recursos Disponibles</h3>
          <p>{recursosDisponibles}</p>
        </div>

        <div className="metric-box">
          <h3>Psicólogos</h3>
          <p>{totalPsicologos}</p>
        </div>
      </div>

      <div className="forum-section">
        <nav className="forum-tabs">
          <button
            className={`tab ${activeTab === "Foro" ? "active" : ""}`}
            onClick={() => setActiveTab("Foro")}
          >
            Foro
          </button>

          <button
            className={`tab ${activeTab === "Recursos" ? "active" : ""}`}
            onClick={() => setActiveTab("Recursos")}
          >
            Recursos
          </button>

          <button
            className={`tab ${activeTab === "Psicólogos" ? "active" : ""}`}
            onClick={() => setActiveTab("Psicólogos")}
          >
            Psicólogos
          </button>
        </nav>

        <div className="tab-content">
          {activeTab === "Foro" && (
            <div>
              <h2 className="forum-title">Gestión del Foro</h2>
              <p className="forum-description">Aquí puedes gestionar las publicaciones del foro.</p>

              {infoPublicaciones.map((post) => (
                <CompAdminForo
                  key={post.id}
                  tituloPublicacion={post.titulo}
                  descripcion={post.contenido_digamos}
                  fechaPublicacion={formatoFecha(post.fecha_publicacion)}
                  usuario={post.usuario_nombre}
                  eliminar={()=>eliminarpublicacion(post.id)}
                />
              ))}
            </div>
          )}

          {activeTab === "Recursos" && (
            <div>
              <h2>Gestión de Consejos</h2>
              {recursos.map((recurso) => (
                <div key={recurso.id} className="recurso-item-admin">
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.descripcion}</p>
                  <p>
                    <strong>Categoría:</strong> {recurso.categoria}
                  </p>
                  {recurso.enlace && (
                    <p>
                      <a
                        href={recurso.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver enlace
                      </a>
                      <button onClick={() => eliminarRecurso(recurso.id)}>Eliminar</button>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "Psicólogos" && (
            <div>
              <h2>Gestión de Psicólogos</h2>
              <p>Aquí puedes gestionar los psicólogos registrados.</p>
              <TablaPsicologos/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompAdminPage;

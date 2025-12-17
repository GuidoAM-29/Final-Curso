import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getData, deleteDataAutenticado } from "../services/fetch";
import "../styles/Consejos.css";

function CompConsejos() {
  const navigate = useNavigate();

  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rol, setRol] = useState(localStorage.getItem("rol"));
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Consejo",
    "Recurso",
    "Autoayuda",
    "Otro",
    "Casos Especiales",
  ];

  useEffect(() => {
    const fetchRecursos = async () => {
      try {
        const data = await getData("foro/crear-recursos/");
        setRecursos(data);
      } catch (error) {
        console.error("Error fetching recursos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecursos();
  }, []);

  const handlePublicarTip = () => {
    navigate("/Publicacion2");
  };

  const handleDelete = async (id) => {
    try {
      await deleteDataAutenticado(`foro/recursos/${id}/`);
      setRecursos(recursos.filter((recurso) => recurso.id !== id));
    } catch (error) {
      console.error("Error deleting recurso:", error);
    }
  };

  const filteredRecursos =
    selectedCategory === "Todos"
      ? recursos
      : recursos.filter(
          (recurso) => recurso.categoria === selectedCategory
        );

  return (
    <div className="Container-CONS">
      <h1 className="title">
        Recursos para tu <span className="highlight">Bienestar</span>
      </h1>

      <p className="subtitle">
        Encuentra consejos y técnicas para cuidar tu salud mental
      </p>

      <nav className="navbar">
        <Link to="/foro" className="navbar-link">Foro</Link>
        <Link to="/Principal" className="navbar-link">Principal</Link>
        <Link to="/Profesionales" className="navbar-link">Psicologos</Link>
      </nav>

      {rol === "Admin" && (
        <button className="btn-add-tip" onClick={handlePublicarTip}>
          Publicar nuevo tip
        </button>
      )}

      <div className="recursos-section">
        <h2>Recursos Disponibles</h2>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Cargando recursos...</p>
        ) : (
          <div className="recursos-list">
            {filteredRecursos.length > 0 ? (
              filteredRecursos.map((recurso) => (
                <div key={recurso.id} className="recurso-item">
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
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p>No hay recursos disponibles.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompConsejos;

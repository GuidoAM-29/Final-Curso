import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../services/fetch";
import "../styles/Consejos.css"

function CompConsejos() {
  const navigate = useNavigate();
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecursos = async () => {
      try {
        const data = await getData('foro/crear-recursos/');
        setRecursos(data);
      } catch (error) {
        console.error('Error fetching recursos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecursos();
  }, []);

  const handlePublicarTip = () => {
    navigate('/Publicacion2');
  };

  return (
    <div className="Container-CONS">
      <h1 className="title">
        Recursos para tu <span className="highlight">Bienestar</span>
      </h1>
      <p className="subtitle">
        Encuentra consejos y técnicas para cuidar tu salud mental
      </p>

      <button className="btn-add-tip" onClick={handlePublicarTip}>Publicar nuevo tip</button>

      <div className="recursos-section">
        <h2>Recursos Disponibles</h2>
        {loading ? (
          <p>Cargando recursos...</p>
        ) : (
          <div className="recursos-list">
            {recursos.length > 0 ? (
              recursos.map((recurso) => (
                <div key={recurso.id} className="recurso-item">
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.descripcion}</p>
                  <p><strong>Categoría:</strong> {recurso.categoria}</p>
                  {recurso.enlace && (
                    <p><a href={recurso.enlace} target='_blank' rel='noopener noreferrer'>Ver enlace</a></p>
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

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Foro.CSS"


function CompForo({publicaciones}) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Ansiedad", "Depresion", "Estrés", "Casos Especiales", "Otros"];

  function handleNuevaPublicacion() {
    navigate('/Publicacion');
  }

  const formatearFecha = (fechaString) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString('es-ES', opciones);
  }

  const filteredPublicaciones = selectedCategory === "Todos" ? publicaciones : publicaciones.filter(post => post.categoria === selectedCategory);

  return (
    <div className="foro-container">
      <header className="foro-header">
        <button className="back-button">←</button>
        <div className="foro-title">
          <strong>Foro Comunitario</strong>
        </div>
      </header>
      <nav className="foro-navbar">
        <Link to="/consejos" className="navbar-link">Recursos y Consejos</Link>
        <Link to="/Principal" className="navbar-link">Principal</Link>
        <Link to="/Profesionales" className="navbar-link">Psicologos</Link>
      </nav>
      <div className="new-post-button-container">
        <button className="new-post-button" onClick={handleNuevaPublicacion}>✍️ Nueva Publicación</button>
      </div>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredPublicaciones.length == 0 &&(
      <div className="empty-publications">
        <p>Aún no hay publicaciones. ¿Quieres hacer una?</p>
      </div>
      )}
      <div className="publicaciones-list">
        {filteredPublicaciones.map((post) => (
          <div key={post.id} className="post-item">
            <h3 className="post-title">{post.titulo}</h3>
            <p className="post-content">{post.contenido_digamos}</p>
            <p className="post-category">{post.categoria}</p>
            <p className="post-date">{formatearFecha(post.fecha_publicacion)}</p>
            <button className="responder-button" onClick={() => {
              navigate('/Respuesta Publicacion')
              localStorage.setItem("idPublicaicon",post.id)
              }}>Responder</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompForo;

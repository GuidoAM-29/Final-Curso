import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/PublicacionForo.css"
import { postData, postDataAutenticado } from '../services/fetch';

function CompPublicacionForo() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Ansiedad");
  const [contenido, setContenido] = useState("");

  async function subirPublicacion(e) {
    e.preventDefault();
    const nuevaPublicacion = {
      titulo: titulo,
      categoria: categoria,
      contenido_digamos: contenido,
      usuario: localStorage.getItem("id_usuario")
    };
    try {
      const peticion = await postDataAutenticado("foro/crear-publicacion/", nuevaPublicacion);

      console.log("RESPUESTA",peticion);
      
      if (peticion) {
        setTitulo("");
        setCategoria("Ansiedad");
        setContenido("");
        navigate('/foro');
      } else {
        alert("Error al enviar la publicación. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar la publicación. Inténtalo de nuevo.");
    }
  }

  return (
    <form className="publicacion-foro-form">
      <label htmlFor="titulo">Título</label>
      <input
        type="text"
        id="titulo"
        onChange={(e)=>setTitulo(e.target.value)}
        name="titulo"
        placeholder="Título"
      />

      <label htmlFor="categoria">Categoría</label>
      <select id="categoria" name="categoria" defaultValue="Ansiedad" onChange={(e)=>setCategoria(e.target.value)}>
        <option value="Ansiedad">Ansiedad</option>
        <option value="Depresión">Depresión</option>
        <option value="Estrés">Estrés</option>
      </select>

      <label htmlFor="contenido">Contenido</label>
      <textarea
        id="contenido"
        name="contenido"
        rows="6"
        onChange={(e)=>setContenido(e.target.value)}
        placeholder="Escribe aquí tu historia..."
      ></textarea>

      <button type="submit" className="submit-button" onClick={subirPublicacion}>Enviar publicación</button>
    </form>
  )
}

export default CompPublicacionForo

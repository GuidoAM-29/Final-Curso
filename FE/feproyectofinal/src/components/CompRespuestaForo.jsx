import React, { useState } from 'react'
import '../styles/RespuestaForo.css'
import { postData } from '../services/fetch'

function CompRespuestaForo() {
  const [comentario,setComentario] = useState("")

  async function enviarComentario() {
    const comentObj = {
      usuario:localStorage.getItem("id_usuario"),
      contenido_respuesta:comentario,
      publicacion:localStorage.getItem("idPublicaicon")
    }
    const peticion = await postData("foro/respuesta-publicacion/",comentObj)
    console.log(peticion);
    console.log("meta");
    
  }

  return (
    <div className='Comentario'>
     <label htmlFor="comentario">Contenido</label>
      <textarea
        id="comentario"
        onChange={(e)=>setComentario(e.target.value)}
        placeholder="Escribe aquí tu respuesta..."
      />
      <button type="button" onClick={enviarComentario} className="submit-button">Enviar respuesta</button>
      </div>

  )
}

export default CompRespuestaForo

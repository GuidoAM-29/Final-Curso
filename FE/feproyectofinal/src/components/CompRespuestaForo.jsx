import React from 'react'
import '../styles/RespuestaForo.css'

function CompRespuestaForo() {
  return (
    <div className='Comentario'>
     <label htmlFor="comentario">Contenido</label>
      <textarea
        id="comentario"
        placeholder="Escribe aquí tu respuesta..."
      />
      <button type="submit" className="submit-button">Enviar respuesta</button>
      </div>

  )
}

export default CompRespuestaForo

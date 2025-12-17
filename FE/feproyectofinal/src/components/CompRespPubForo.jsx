import React, { useEffect } from 'react'
import "../styles/RespuestaPubForo.css"
import { useState } from 'react'
import { getData, postData } from '../services/fetch'
function CompRespPubForo() {
  const [comentario,setComentario] = useState("")
  const [comentariosPublicacion,setComentariosPublicacion] = useState([])

  useEffect(()=>{
    async function traerComentarios() {
      const peticion = await getData("foro/respuesta-publicacion")
      setComentariosPublicacion(peticion)
    }
    traerComentarios()
  },[])

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
    <div className='Forito'>
        <p>Respuestas de otras personas</p>
        {comentariosPublicacion.map((coment)=>{
          return(
            <>
              <p>{coment.usuario_nombre}</p>
              <p>{coment.contenido_respuesta}</p>
            </>
          )
        })}
        <div className="form-publicacion">
        
        <div className="campo">
          <label htmlFor="contenido">Contenido</label>
          <textarea
            id="contenido"
            onChange={(e)=>setComentario(e.target.value)}
            placeholder="Escribe aquí tu respuesta"
          />
        </div>

        <div className="acciones">
            <button type="button" onClick={enviarComentario} className="submit-button">Enviar respuesta</button>
        </div>

      </div>




    </div>
  )
}

export default CompRespPubForo
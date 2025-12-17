import React, { useEffect, useState } from 'react'
import CompForo from '../components/CompForo'
import { getData, getDataAutenticado } from '../services/fetch'

function Foro() {
  const [publicaciones,setPublicaciones] = useState([])

  async function traerPublicaciones() {
    const peticion = await getDataAutenticado("foro/crear-publicacion/")
    setPublicaciones(peticion)
  }
  useEffect(()=>{
    traerPublicaciones()
  },[])
  return (
    <div>
      <CompForo publicaciones={publicaciones}/>
    </div>
  )
}

export default Foro

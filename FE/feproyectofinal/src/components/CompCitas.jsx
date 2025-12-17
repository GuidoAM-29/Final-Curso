import React, { useEffect, useState } from 'react'
import '../styles/Citas.css'
import { getData } from '../services/fetch'

function CompCitas() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const fetchCitas = async () => {
      const data = await getData(`citas/cita-usuario/${localStorage.getItem('id_usuario')}/`)
      setCitas(data)
    }
    fetchCitas()
  }, [])

  return (
    <div className="citas">
      <h1>Mis Citas</h1>
      <div className="citas-list">
        {citas.map((cita) => (
          <div key={cita.id} className="cita-item">
            <p>Psicólogo: {cita.usuario_psicologo.nombre} {cita.usuario_psicologo.apellido}</p>
            <p>Fecha: {cita.fecha_cita.split('T')[0]}</p>
            <p>Hora: {cita.fecha_cita.split('T')[1].split('.')[0]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompCitas

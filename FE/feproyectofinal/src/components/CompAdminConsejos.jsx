import React from 'react'
import '../styles/AdminPageConsejos.css'

const CompAdminConsejos = ({tituloPublicacion,fechaPublicacion,eliminar}) => {
  return (
    <>
            <div className="admin-consejo-item">
                <div className="titulo-consejo">
                    <p>{tituloPublicacion}</p>

                </div>
                <div className="fecha-consejo">
                    <p> {fechaPublicacion}</p>
                </div>
                <div className="boton-consejo">
                    <button onClick={eliminar}>Eliminar Publicacion</button>
                </div>
            </div>
        </>
  )
}

export default CompAdminConsejos
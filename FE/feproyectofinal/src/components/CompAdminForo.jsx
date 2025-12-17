import "../styles/AdminPageForo.css"
const CompAdminForo = ({tituloPublicacion,descripcion,usuario,fechaPublicacion,eliminar}) =>{
    return(
        <>
            <div className="admin-foro-container">
                <div className="admin-foro-content">
                    <p className="admin-foro-title">{tituloPublicacion}</p>
                    <p className="admin-foro-description">{descripcion}</p>
                </div>
                <div className="admin-foro-meta">
                    <p>{usuario} | {fechaPublicacion}</p>
                </div>
                <div className="admin-foro-actions">
                    <button className="admin-foro-delete-btn" onClick={eliminar}>Eliminar Publicacion</button>
                </div>
            </div>
        </>
    )
}
export default CompAdminForo;
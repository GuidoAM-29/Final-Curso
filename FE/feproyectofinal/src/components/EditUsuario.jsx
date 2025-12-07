import { useEffect, useState } from "react";
import "../styles/Usuario.css";
import { getData, getDataAutenticado } from "../services/fetch";
function EditUsuario() {
  const [usuario,setUsuario] = useState([])

  useEffect(()=>{
    async function traerUsuario() {
      const peticion = await getDataAutenticado(`usuarios/usuario-por-id/${localStorage.getItem("id_usuario")}/`)
      setUsuario(peticion[0])
    }
    traerUsuario()
  },[])

  return (
    <div className="edit-profile">
      <header>
        <button className="menu-button">☰</button>
        <button className="save-button">✓</button>
      </header>

      <h1>Editar perfil</h1>

      <div className="profile-photo-section">
        <img
          src="ruta/de/tu/imagen.jpg"
          alt="Foto de perfil"
          className="profile-photo"
        />
        <button className="change-photo-button">Cambiar foto</button>
      </div>

      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Nombre</label>
          <input id="username" type="text" placeholder="Ejemplo" value={usuario.username}/>
        </div>


        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="ejemplo@ssf.com.mx" value={usuario.email}/>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Género</label>
          <select id="gender" defaultValue="">
            <option value="" disabled>
              Selecciona género
            </option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
            <option value="prefiero-no-decidir">Prefiero no decidir</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cedula">Número de cédula</label>
          <input id="cedula" type="text" placeholder="Número de cédula" value={usuario.num_cedula}/>
        </div>

      </form>
    </div>
  );
}

export default EditUsuario;

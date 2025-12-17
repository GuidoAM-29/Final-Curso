import React, { useEffect, useState } from "react";
import { getDataAutenticado, patchDataAutenticado } from "../services/fetch";
import "../styles/TablaPsicologos.css";

function TablaPsicologos() {
  const [usuarios, setUsuarios] = useState([]);
  const [rolSeleccionado,setRolSeleccionado] = useState("")
  const actualizarRolUsuario = async(id,rolSelected) =>{
    const objActualizar = {
        id_usuario: id,
        rol: rolSelected
    }
    const peticion = await patchDataAutenticado("usuarios/actualizar-usuario/",objActualizar)
    console.log(peticion);
    console.log(objActualizar);
    
    
  }

  useEffect(() => {
    const traerUsuarios = async () => {
      const peticion = await getDataAutenticado("usuarios/crear-usuario");
      
      setUsuarios(peticion);
    };
    traerUsuarios();
  }, []);

  return (
    <div className="tabla-usuarios">
      <table>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>DATE JOINED</th>
            <th>ROL</th>
            <th>CAMBIAR ROL</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.date_joined}</td>
              <td>{usuario.rol}</td>
              <td>
                <select className="rol-select" onChange={(e)=>{
                    actualizarRolUsuario(usuario.id,e.target.value)
                }}>
                  <option value="" selected disabled>Selecciona un rol</option>
                  <option value="Psicologo">Psicólogo</option>
                  <option value="Admin">Administrador</option>
                  <option value="Usuario">Usuario</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPsicologos;

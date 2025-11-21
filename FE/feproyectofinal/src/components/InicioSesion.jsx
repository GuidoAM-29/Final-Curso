import React from "react";
import "../styles/IS.CSS"
import { postData } from "../services/fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  async function loginUsuario(e) {
    e.preventDefault()
    const objUsuario = {
      username: username,
      password: password,
      
    
    }
    const data = await postData('usuarios/login-usuario/',objUsuario)
    console.log(data);
    if (data.mensaje != 'El usuario no existe') {
      localStorage.setItem("id_usuario",data.id_usuario)
      navigate('/Usuario')
    }
    
  }

  return (
    <div className="IS-Container">
      <div className="logo-heart">💚</div>
      <h1 className="login-title">MindLink</h1>
      <p className="login-subtitle">Red de Apoyo Psicológico Comunitario</p>
      <form className="login-form">
        <input
          type="text"
          placeholder="Correo electrónico o teléfono"
          className="login-input"
          onChange={(e)=>setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button type="button" 
          onClick={loginUsuario}
        className="login-button">
            Iniciar Sesión
          
          </button>
      </form>
      <div className="divider" />
      <button
        onClick={()=>{
          navigate("/aaaaa")
        }}
      className="register-button">Crear nueva cuenta</button>
      
      <p className="forgot-password">¿Olvidaste tu contraseña?</p>
    </div>
  );
}

export default InicioSesion;


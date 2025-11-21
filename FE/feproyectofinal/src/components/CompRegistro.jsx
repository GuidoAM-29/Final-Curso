import React, { useState } from 'react'
import "../styles/Register.CSS"
import { postData } from '../services/fetch'


function CompRegistro() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [role, setRole] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')



  async function guadarUsuario(e) {
    e.preventDefault()
    const objUsuario = {
      username: username,
    edad: age,
       password: password,
      genero: gender,
      rol: role,
      num_cedula: cedula,
      email:correo
    }
    const data = await postData('usuarios/crear-usuario/',objUsuario)
    console.log(data);
    
  }
  return (
    <div className='R-Container'>
      <div className="logo-heart">💚</div>
      <h1 className="registro-title">MindLink</h1>
      <p className="registro-subtitle">Red de Apoyo Psicológico Comunitario</p>

      <h2 className="welcome-message">Bienvenido a tu espacio seguro</h2>
      <p className="welcome-description">Conecta, comparte y encuentra apoyo en nuestra comunidad</p>
      
      <form className="registro-form">
        <input 
          type="text" 
          name="username" 
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Nombre de usuario" 
          className="registro-input" 
          required 
        />

        <input 
          type="number" 
          name="age" 
          onChange={(e)=>setAge(e.target.value)}
          placeholder="Edad" 
          className="registro-input" 
          required 
          min="1" 
          max="120" 
        />

        <select name="gender" className="registro-select" required  onChange={(e)=>setGender(e.target.value)}> 
          <option value="" disabled selected>Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="OTRO">Otro</option>
        </select>
        <select name="role" className="registro-select" required onChange={(e)=>setRole(e.target.value)}>
          <option value="" disabled selected>Rol</option>
          <option value="Usuario">Usuario</option>
          <option value="Psicologo">Psicólogo</option>
          <option value="Admin">Administrador</option>
        </select>

        <input 
          type="text" 
          name="cedula" 
          onChange={(e)=>setCedula(e.target.value)}
          placeholder="Número de cédula" 
          className="registro-input" 
          required 
        />
           <input 
          type="password" 
          name="cedula" 
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Clave" 
          className="registro-input" 
          required 
        />

        <input 
        type="text" 
        name='correo'
        onChange={(e)=>setCorreo(e.target.value)}
        placeholder='correo'
        className='correo-input'
        required
        />
       <button onClick={guadarUsuario} className="registro-button">Registrarse</button>
      </form>



    </div>
  )
}

export default CompRegistro
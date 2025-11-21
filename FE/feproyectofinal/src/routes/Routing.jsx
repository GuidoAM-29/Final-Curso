import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Register from '../pages/Register'
import Login from '../pages/Login'
import Foro from '../pages/Foro'
import Consejos from '../pages/Consejos'
import ConfUsuario from '../components/EditUsuario.jsx'
import CompInicio from '../components/CompInicio.jsx'
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/foro' element={<Foro/>}/>
        <Route path='/consejos' element={<Consejos/>}/>
        <Route path='/usuario' element={<ConfUsuario/>}/>
        <Route path='/inicio' element={<CompInicio/>}/>
        
      </Routes>
    </Router>
  )
}

export default Routing
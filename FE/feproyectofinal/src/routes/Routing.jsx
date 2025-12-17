import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Register from '../pages/Register'
import Login from '../pages/Login'
import Foro from '../pages/Foro'
import Consejos from '../pages/Consejos'
import ConfUsuario from '../components/EditUsuario.jsx'
import CompInicio from '../components/CompInicio.jsx'
import PublicacionForo from '../pages/PublicacionForo.jsx'
import CompMain from '../components/CompMain.jsx'
import CompPubTip from '../components/CompPubTip.jsx'
import CompPsicologosPage from '../components/CompPsicologosPage.jsx'
import CompRespuestaForo from '../components/CompRespuestaForo.jsx'
import AdminPage from '../components/CompAdminPage.jsx'
import CompAñadirPsicologos from '../components/CompAñadirPsicologos.jsx'
import AgendarPagina from '../pages/AgendarPagina.jsx'
import CompCitas from '../components/CompCitas.jsx'
import CompRespPubForo from '../components/CompRespPubForo.jsx'

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
        <Route path='/Publicacion' element={<PublicacionForo/>}/>
        <Route path='/Principal' element={<CompMain/>}/>
        <Route path='/Publicacion2' element={<CompPubTip/>}/>
        <Route path='/Profesionales' element={<CompPsicologosPage/>}/>
        <Route path='/Respuesta' element={<CompRespuestaForo/>}/>
        <Route path='/Administración' element={<AdminPage/>}/>
        <Route path='/Psicologos' element={<CompAñadirPsicologos/>}/>
        <Route path='/Agendar' element={<AgendarPagina/>}/>
        <Route path='/Citas' element={<CompCitas/>}/>
        <Route path='/Respuesta Publicacion' element={<CompRespPubForo/>}/>




        
      </Routes>
    </Router>
  )
}

export default Routing

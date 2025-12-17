import { useEffect, useState } from "react"
import "../styles/CompPsicologosPage.css"
import CardDoctor from './CardDoctor'
import { getData, getDataAutenticado } from "../services/fetch"
import ListCardDoctor from "./ListCardDoctor"


function CompPsicologosPage() {
  const [psicologos,setPsicologos] = useState([])

  useEffect(()=>{
    async function traerPsicologos() {
      const peticion = await getData("usuarios/crear-usuario/")
      const filtroPsicologos = peticion.filter((psico)=>psico.rol=="Psicologo")
      setPsicologos(filtroPsicologos)
    }
    traerPsicologos()
  },[])
  return (
    <>
    <ListCardDoctor lista={psicologos}/>
    </>
  )
}

export default CompPsicologosPage
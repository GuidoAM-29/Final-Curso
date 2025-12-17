import React from "react";
import CardDoctor from "./CardDoctor";
import "../styles/DoctorCard.css";
import { useNavigate } from "react-router-dom";
const ListCardDoctor = ({ lista }) => {
    const navigate = useNavigate()
  return (
    <div className="cards-container">
      {lista.map((item, index) => (
        <CardDoctor
          key={index}
          icon={item.genero == "Masculino" ? "👨‍⚕️" : item.genero == "Femenino" ? "👩‍⚕️" : "Sin Icono"}
          nombre={item.genero == "Masculino" ? `Dr. ${item.username}` : item.genero == "Femenino" ? `Dra. ${item.username}` : item.username}
          cuentaCreada={item.date_joined}
          agendar={()=>{
            localStorage.setItem("idPsicologo",item.id)
            navigate("/agendar")
          }}
        />
      ))}
    </div>
  );
};

export default ListCardDoctor;

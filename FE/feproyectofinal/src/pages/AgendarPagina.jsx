import React, { useState } from "react";
import DateTimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/AgendarPagina.css";
import { postData } from "../services/fetch";
import Header from "../components/Header";

export default function AgendarPagina() {
  const [fecha, setFecha] = useState(null);

  const agendarCita = async () => {
    const objCita = {
      usuario_psicologo: localStorage.getItem("idPsicologo"),
      usuario_paciente: localStorage.getItem("id_usuario"),
      fecha_cita: fecha, // ahora contiene fecha + hora
    };

    const peticion = await postData("citas/crear-cita/", objCita);
    console.log(peticion);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!fecha) return alert("Selecciona una fecha y hora");

    alert(
      `Agendado:\nFecha y hora: ${fecha.toLocaleString()}`
    );
  };

  return (
    <div className="agenda-container">
      <Header />
      <h1>Agendar Cita</h1>

      <form className="agenda-form" onSubmit={manejarSubmit}>

        <label>Selecciona fecha y hora:</label>

        <DateTimePicker
          selected={fecha}
          onChange={(date) => setFecha(date)}
          minDate={new Date()}
          placeholderText="Elige fecha y hora"

          /* 🔥 aquí activamos la selección de tiempo */
          showTimeSelect
          timeIntervals={30}
          timeCaption="Hora"
          dateFormat="dd/MM/yyyy h:mm aa"

          className="input-calendar"
        />

        <button type="button" onClick={agendarCita} className="btn-agendar">
          Agendar
        </button>
      </form>
    </div>
  );
}




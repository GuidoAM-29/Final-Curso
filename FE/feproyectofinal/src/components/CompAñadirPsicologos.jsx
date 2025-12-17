import "../styles/AñadirPsicologos.css";

function CompAñadirPsicologos() {
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
          {/* Aquí puedes mapear usuarios si tienes una lista */}
          <tr>
            <td>ejemplo_user</td>
            <td>user@ejemplo.com</td>
            <td>2025-12-09</td>
            <td>Psicólogo</td>
            <td>
              <select>
                <option value="Psicólogo">Psicólogo</option>
                <option value="Administrador">Administrador</option>
                <option value="Visitante">Visitante</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CompAñadirPsicologos;

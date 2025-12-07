import React from 'react'
import '../styles/CompPubTip.css'

function CompPubTip() {
  return (
    <form className='comp-pub-tip-form'>
      <div className='titulo'>
        <label htmlFor='titulo'>Título:</label>
        <input type='text' id='titulo' name='titulo' placeholder='Ingresa el título' />
      </div>
      <div className='descripcion'>
        <label htmlFor='descripcion'>Descripción:</label>
        <textarea id='descripcion' name='descripcion' placeholder='Ingresa la descripción'></textarea>
      </div>
      <div className='enlace'>
        <label htmlFor='enlace'>Enlace:</label>
        <input type='url' id='enlace' name='enlace' placeholder='Ingresa el enlace' />
      </div>
      <div className='categoria'>
        <label htmlFor='categoria'>Categoría:</label>
        <select id='categoria' name='categoria'>
          <option value=''>Selecciona una categoría</option>
          <option value='consejo'>Consejo</option>
          <option value='recurso'>Recurso</option>
          <option value='otro'>Otro</option>
        </select>
      </div>
      <button type='submit' className='submit-button'>Enviar</button>
    </form>
  )
}

export default CompPubTip

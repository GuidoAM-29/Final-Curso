import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postData } from '../services/fetch'
import '../styles/CompPubTip.css'

function CompPubTip() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    enlace: '',
    categoria: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await postData('foro/crear-recursos/', formData)
      navigate('/consejos')
    } catch (error) {
      console.error('Error al enviar el tip:', error)
    }
  }

  return (
    <form className='comp-pub-tip-form' onSubmit={handleSubmit}>
      <div className='titulo'>
        <label htmlFor='titulo'>Título:</label>
        <input type='text' id='titulo' name='titulo' placeholder='Ingresa el título' value={formData.titulo} onChange={handleChange} required />
      </div>
      <div className='descripcion'>
        <label htmlFor='descripcion'>Descripción:</label>
        <textarea id='descripcion' name='descripcion' placeholder='Ingresa la descripción' value={formData.descripcion} onChange={handleChange} required></textarea>
      </div>
      <div className='enlace'>
        <label htmlFor='enlace'>Enlace:</label>
        <input type='url' id='enlace' name='enlace' placeholder='Ingresa el enlace' value={formData.enlace} onChange={handleChange} />
      </div>
      <div className='categoria'>
        <label htmlFor='categoria'>Categoría:</label>
        <select id='categoria' name='categoria' value={formData.categoria} onChange={handleChange} required>
          <option value=''>Selecciona una categoría</option>
          <option value='consejo'>Consejo</option>
          <option value='recurso'>Recurso</option>
          <option value='otro'>Otro</option>
          <option value='autoayuda'>Autoayuda</option>
          <option value='casos especiales'>Casos Especiales</option>
        </select>
      </div>
      <button type='submit' className='submit-button'>Enviar</button>
    </form>
  )
}

export default CompPubTip

import React from 'react'
import { useParams } from 'react-router-dom'
import CompRespuestaForo from '../components/CompRespuestaForo'

function RespuestaForo() {
  const { id } = useParams()

  return (
    <div>
       <CompRespuestaForo postId={id} />
    </div>
  )
}

export default RespuestaForo

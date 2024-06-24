import React from 'react'
import Pestanias from '../components/Pestanias'
import './Region.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Region() {

  const { id } = useParams()

  const [regiones, setRegiones] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4001/api/region/${id}`)
      .then(response => response.json())
      .then(data => setRegiones(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, [id])

  if (!regiones){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <div className='container-fluid fondoRegion'>
        <div className='row tituloMapa pt-5'>
          <h2 style={{ textTransform: 'uppercase' }}>{regiones.nombre}</h2>
        </div>
        <div className='row'>
          <div className='col-2'>

          </div>
          <div className='col-6 text-center mt-5'>
            <img id='regionEco' src={regiones.imgRegion} />
          </div>
          <div className='col-4 pestaniasRegion'>
            <Pestanias />
            <Pestanias />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Region
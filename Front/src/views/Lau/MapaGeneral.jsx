import React from 'react'
import './MapaGeneral.css'
import Pestanias from '../../components/Lau/Pestanias'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MapaGeneral() {

  const [regiones, setRegiones] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/api/region')
      .then(response => response.json())
      .then(data => setRegiones(data))
      .catch(error => console.error('Error al obtener datos:', error));

  }, [])


  return (
    <div className='container-flex fondoMapa'>
      <div className='row tituloMapa pt-5'>
        <h2>MAPA INTERACTIVO</h2>
      </div>
      <div className='row'>
        <div className='col-8 text-center mt-5'>
          <img id='mapa' src='https://i.imgur.com/3MRezHD.png' alt='Mapa interactivo' />
        </div>
        <div className='col-4'>
          {regiones.map(region => (
            <Link key={region._id} to={`/region/${region._id}`} className='custom-link'>
              <Pestanias fotoRegion={region.fotoRegion} nombreRegion={region.nombre} subZona={region.subZona} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

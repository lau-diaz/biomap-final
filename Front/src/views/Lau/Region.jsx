import React from 'react'
import Pestanias from '../../components/Lau/Pestanias'
import './Region.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import BotonCapsulas from '../../components/Lau/BotonCapsulas'


function Region() {
  const { id } = useParams();
  const [region, setRegion] = useState(null); // Cambio aquí: region en lugar de regiones

  useEffect(() => {
    fetch(`http://localhost:4001/api/region/${id}`)
      .then(response => response.json())
      .then(data => setRegion(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, [id]);

  if (!region) {
    return <div>Loading...</div>;
  } 

  // Aca me pongo a divagar
  // const [capsula, setCapsula] = useState(null);
  // useEffect(() => {
  //   fetch(`http://localhost:4001/api/capsulas`)
  //     .then(response => response.json())
  //     .then(data => setCapsula(data))
  //     .catch(error => console.error('Error al obtener datos:', error));
  // }, []);

  // Aca termina mi locura 

  return (
    <div>
      <div className='container-fluid fondoRegion'>
        <div className='row tituloMapa pt-5 m-4'>
          <h2 style={{ textTransform: 'uppercase' }}>{region.nombre}</h2>
        </div>
        <div className='row'>
          <div id='contenedor' className='col-3'>
            <img id='imgMapa' src={region.imgMapa} />
          </div>
          <div id='contieneImg' className='col-6 text-center mt-5'>
            <img id='regionEco' src={region.imgRegion} />
          </div>
          <div className='col-3' id='pestanias'>
            <Pestanias nombreRegion={region.ecosistema1} /> 
            <Pestanias nombreRegion={region.ecosistema2} />
            {region.ecosistema3 && <Pestanias nombreRegion={region.ecosistema3} />}
          </div>
        </div>
        <div className='row m-5'></div>
        <div className='row'></div>
        <div className='row mt-5 mb-5 p-3'>
          <div className='col-3'></div>
          <div className='col-6'>
            <Link to='/capsula'>
            <BotonCapsulas nombreCapsula={"Capsula"}/>
            </Link>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Region
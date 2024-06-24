import React from 'react'
import './MapaGeneral.css'
import Pestanias from '../components/Pestanias'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MapaGeneral() {

  const [regiones, setRegiones] = useState([])

  useEffect( () => {
    fetch('http://localhost:4001/api/region')
    .then(response => response.json())
    .then(data => setRegiones(data))
    .catch(error => console.error('Error al obtener datos:', error));

  } , [] )


  return (
    <div className='container-flex fondoMapa'>
      <div className='row tituloMapa pt-5'>
        <h2>MAPA INTERACTIVO</h2>
      </div>
        <div className='row'>
            <div className='col-8 text-center mt-5'>
                <img id='mapa' src='https://i.imgur.com/3MRezHD.png'/>
            </div>
            <div className='col-4'>
                <Pestanias fotoRegion={"https://i.imgur.com/C5zDb3h.png"} nombreRegion={"REGIÓN DE ARICA Y PARINACOTA"} subRegion={"NORTE GRANDE"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/eid6ieS.png"} nombreRegion={"REGIÓN DE TARAPACÁ"} subRegion={"NORTE GRANDE"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/z8L6MPe.png"} nombreRegion={"REGIÓN DE ANTOFAGASTA"} subRegion={"NORTE GRANDE"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/GM4nwi2.png"} nombreRegion={"REGIÓN DE ATACAMA"} subRegion={"NORTE CHICO"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/2FbmqvO.png"} nombreRegion={"REGIÓN DE COQUIMBO"} subRegion={"NORTE CHICO"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/Luv86Tg.png"} nombreRegion={"REGIÓN DE VALPARAÍSO"} subRegion={"ZONA CENTRAL"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/pyYWqrd.png"} nombreRegion={"REGIÓN METROPOLITANA"} subRegion={"ZONA CENTRAL"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/oEUWhHJ.png"} nombreRegion={"REGIÓN DEL LIBERTADOR BERNARDO O'HIGGINS"} subRegion={"ZONA CENTRAL"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/jiCSMVS.png"} nombreRegion={"REGIÓN DEL MAULE"} subRegion={"ZONA CENTRAL"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/PKdfoaY.png"} nombreRegion={"REGIÓN DE ÑUBLE"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/cwU3kFL.png"} nombreRegion={"REGIÓN DEL BIO-BÍO"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/a5eE4hb.png"} nombreRegion={"REGIÓN DE LA ARAUCANÍA"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/9vesW6d.png"} nombreRegion={"REGIÓN DE LOS RÍOS"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/JYp2KBk.png"} nombreRegion={"REGIÓN DE LOS LAGOS"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/htmxxgh.png"} nombreRegion={"REGIÓN DE AYSÉN"} subRegion={"ZONA SUR"}/>
                <Pestanias fotoRegion={"https://i.imgur.com/ZRMGLjm.png"} nombreRegion={"REGIÓN DE MAGALLANES"} subRegion={"ZONA SUR"}/>
            </div>
        </div>
    </div>
  )
}

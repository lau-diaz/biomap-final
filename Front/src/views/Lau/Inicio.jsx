import React from 'react'
import Parrafoimg from '/src/components/Lau/Parrafoimg.jsx'
import Carrusel from '/src/components/Lau/Carrusel.jsx'
import ImgHov from '/src/components/Lau/ImgHov.jsx'
import BotonSubir from '/src/components/Lau/BotonSubir.jsx'
import './Fondo.css'

function Inicio() {
    return (
        <div>
            <BotonSubir />
            <div className="row m-5 p-3"></div>
            <Parrafoimg titulo={"BIENVENIDO"} imagen={"https://i.imgur.com/cvngJzg.png"} />
            <div className="row m-5 p-3"></div>
            {/* <Carrusel /> */}
            <div id="cuadriculaImagenes" className="row text-center mt-5">
                <div className='col-1'></div>
                <div className="col">
                    <ImgHov nombre={"Zorro Culpeo"} imagenAnimales={"https://i.imgur.com/djRqc55.jpeg"} />
                </div>
                <div className="col">
                    <ImgHov nombre={"Picaflor de Arica"} imagenAnimales={"https://i.imgur.com/XPMsUxA.gif"} />
                </div>
                <div className="col">
                    <ImgHov nombre={"Chungungo"} imagenAnimales={"https://i.imgur.com/majNqFB.jpeg"} />
                </div>
                <div className="col">
                    <ImgHov nombre={"Monito del Monte"} imagenAnimales={"https://i.imgur.com/9uX3Pnl.jpeg"} />
                </div>
                <div className='col-1'></div>
            </div>
            <div className="row m-5"></div>
            <Parrafoimg titulo={"¿CÓMO FUNCIONA BIOMAP?"} imagen={"https://i.imgur.com/P6qkS9u.png"} />
            <div className="row m-5"></div>
        </div>
    )
}

export default Inicio
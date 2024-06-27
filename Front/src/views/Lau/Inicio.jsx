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
            <Parrafoimg titulo={"BIENVENIDO"} texto={"Nos complace invitarte a explorar y aprender sobre la increíble flora y fauna de Chile a través de nuestro hermoso y detallado mapa interactivo. Biomap ha sido diseñado para ser fácil de usar e intuitivo, permitiendo que personas de todas las edades descubran la biodiversidad única de nuestro país. Navega por diferentes regiones, conoce especies fascinantes y sumérgete en la naturaleza chilena desde la comodidad de tu hogar. Únete a nosotros en este viaje educativo y descubre los tesoros naturales que hacen de Chile un lugar tan especial. ¡Empieza a explorar con Biomap hoy mismo!"} imagen={"https://i.imgur.com/cvngJzg.png"} />
            <div className="row m-5 p-3"></div>
            {/* <Carrusel /> */}
            <div id="cuadriculaImagenes" className="row text-center mt-5">
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
            </div>
            <div className="row m-5"></div>
            <Parrafoimg titulo={"¿CÓMO FUNCIONA BIOMAP?"} texto={"Para comenzar a utilizar Biomap, primero necesitas registrarte e iniciar sesión en nuestra página. Una vez dentro, puedes dirigirte directamente a nuestro mapa interactivo o alternativamente puedes acceder al menú de cápsulas informativas, donde podrás explorar la flora, fauna y biomas de Chile de manera intuitiva, también encontrarás detallada información sobre las especies y ecosistemas que componen nuestro país . Si tienes alguna duda o necesitas más información, no dudes en contactarnos a través de nuestro formulario de contacto, ubicado en la parte posterior de nuestra página web. ¡Te invitamos a descubrir y aprender con Biomap!"}imagen={"https://i.imgur.com/P6qkS9u.png"} />
            <div className="row m-5"></div>
        </div>
    )
}

export default Inicio
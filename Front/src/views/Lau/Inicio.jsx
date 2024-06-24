import React from 'react'
import Parrafoimg from '/src/components/Parrafoimg.jsx'
import Carrusel from '/src/components/Carrusel.jsx'
import ImgHov from '/src/components/ImgHov.jsx'
import BotonSubir from '/src/components/BotonSubir.jsx'
import './Fondo.css'

function Inicio() {
    return (
        <div>
            <BotonSubir />
            <div className="row m-5 p-3"></div>
            <Parrafoimg titulo={"BIENVENIDO"} imagen={"https://i.imgur.com/cvngJzg.png"} />
            <div className="row m-5 p-3"></div>
            <Carrusel />
            <div id="cuadriculaImagenes" className="row text-center mt-5">
                <div className="col-4">
                    <ImgHov nombre={"Zorro Culpeo"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYZuIK6NXi4MLf53jr5fCRNxWVo_FErnC-ibFCVLmpa-3ix8bvdSAlp2H7fK_54DxGiMW0t418GHSCYkHJ3-0zbG_LCp9ljy0s=w1920-h919-rw-v1"} />
                </div>
                <div className="col-4">
                    <ImgHov nombre={"Picaflor de Arica"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaMFwHB6oHolbnHQh_CkPmvcMbExYTCx69DwCmKSfK--fiT0xsGK72FrN7rzZDDWKEAcf8_RDYwN5zVBE2jODZCnLNMCPeQoe8=w1920-h919"} />
                </div>
                <div className="col-4">
                    <ImgHov nombre={"Chungungo"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY6DnrWC3JpclWYPAvvZbvCn6_03xeCFha-Z887bE21IO69l_d8HQLvpSVq1hsQVq2GXhrVzjFxc2G7yaLxrhAAGpm1Z_8q9pE=w1920-h919-rw-v1"} />
                </div>
            </div>
            <div className="row m-5"></div>
            <Parrafoimg titulo={"¿CÓMO FUNCIONA BIOMAP?"} imagen={"https://i.imgur.com/P6qkS9u.png"} />
            <div className="row m-5"></div>
        </div>
    )
}

export default Inicio
import React from "react"
import './Parrafoimg.css'

const Parrafoimg = ({titulo, texto, imagen}) => {
    return (
        <div className="fondotexto">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container">
                        <h1 className="text-center mt-5 pt-5" style={{fontFamily: "Righteous, sans-serif", fontWeight: "500", fontStyle: "normal", fontSize: "55pt", color: "#3B2D2D"}}>
                            {titulo}
                        </h1>
                    </div>
                    <div className="text-center texto">
                    <p>{texto}</p>
                    </div>
                </div>
                <div className="text-center pt-3">
                    <img id="logoPrincipio"
                        src={imagen} />
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )
}

export default Parrafoimg
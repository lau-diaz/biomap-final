import React from 'react'
import './ImgHov.css'

function ImgHov({nombre, imagenAnimales}) {
  return (
    <div>
        <div className="container">
        <img className="fotosInicio"
          src={imagenAnimales}/>
          <div className="middle">
            <div className="textoHover">{nombre}</div>
            <div className="textoFoto">¡Si quieres saber más sobre el {nombre}, regístrate!</div>
          </div>
        </div>
      </div>
  )
}

export default ImgHov
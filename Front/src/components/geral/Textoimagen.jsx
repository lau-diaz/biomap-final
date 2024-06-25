import React from "react"
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import './Textoimagen.css'

function Textoimagen() {
  return (
    <div id="textoimagen">

<       div className="container mt-5 pt-4">
            <div className="row">
        <div className="col-md-6">
            <h2>¿Quiénes somos?</h2>
            <p style={{ textAlign: 'justify' }}>Somos un grupo de cinco estudiantes de programación full stack JavaScript, actualmente en la recta final de nuestro bootcamp con Generation. Impulsadas por el deseo de crear un proyecto significativo y sostenible, hemos unido nuestras habilidades y conocimientos para desarrollar Biomap. Nuestro objetivo es proporcionar una herramienta educativa y accesible que permita a los usuarios explorar y aprender sobre la biodiversidad de Chile. Creemos en la importancia de la tecnología como medio para promover la protección y conservación de nuestro patrimonio natural.</p>
        
        </div>
        <div className="col-md-6">
            <img src="https://i.imgur.com/UNNYZO2.png" className="img-fluid"/>
        
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Textoimagen
import React from "react"
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"

function Imagentexto() {
  return (
    <div>
        <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <img src="https://lh3.google.com/u/0/d/1fMs52H6e0-MLwUvDlrLOZD5SokoZKBwB=w1920-h878-iv1" className="img-fluid mx-auto d-block" alt="Imagen de Biodiversidad" lang="400" width="400"/>
        </div>
        <div className="col-md-6">
            <h3>Visión:</h3>
            <p style={{ textAlign: 'justify' }}>
                Ser una plataforma líder en la educación y promoción de la biodiversidad chilena, reconocida por su capacidad para conectar a las personas con la riqueza natural del país. Aspiramos a inspirar una nueva generación de ciudadanos conscientes y comprometidos con la conservación del medio ambiente, utilizando la tecnología para facilitar el acceso a la información y fomentar un mayor respeto y cuidado por la naturaleza.</p>
            <h3>Misión:</h3>
            <p style={{ textAlign: 'justify' }}>
                Desarrollar y mantener una herramienta interactiva y educativa que permita a los usuarios descubrir la biodiversidad de Chile de manera intuitiva y atractiva. A través de Biomap, buscamos sensibilizar y educar a la población sobre la importancia de la conservación de los ecosistemas, promoviendo acciones concretas para proteger nuestra flora y fauna. Nos comprometemos a ofrecer una plataforma que combine rigor científico con una experiencia de usuario enriquecedora, contribuyendo al conocimiento y la apreciación de la biodiversidad chilena.
            </p>
        </div>
    </div>
</div>      
    </div>

    
  )
}

export default Imagentexto

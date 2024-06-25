import { useState } from 'react'
import MenuMapaCapsulas from '../../components/Almendra/MenuMapaCapsulas.jsx'
import './MenuSeleccion.css'

function MenuSeleccion() {
return (

<div className="App">
  <div className="container text-center">
      <h1  style={{color: "#3B2D2D", fontFamily: "Righteous, sans-serif"}}>BIENVENIDO</h1>
      <p style={{fontFamily: "Poppins, sans-serif"}}>¿Qué información deseas revisar?</p>
  </div>
  <div className="container position-relative">
    <div className="row justify-content-center">
        <div className="col d-flex justify-content-end">
          <MenuMapaCapsulas texto={"CÁPSULAS INFORMATIVAS"} colorbtn={"#79BF67"}/>
          <div className="custom-vertical-line"></div>
        </div>
    <div className="col d-flex justify-content-start">
          <MenuMapaCapsulas texto={"MAPA INTERACTIVO"} colorbtn={"#457692"}/>
      </div>
     </div>
  </div>
  </div>
 



  );
}


export default MenuSeleccion;

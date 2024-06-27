import { useState } from 'react'
import MenuCapsulas from '../../components/Almendra/MenuCapsulas.jsx'
import '../../components/Almendra/MenuMapaCapsulas.css'


function SeleccionCapsulas() {
  return (
      <div className="App">
      <div className="container text-center">
      <h1  style={{color: "#3B2D2D", fontFamily: "Righteous, sans-serif"}}>CÁPSULAS INFORMATIVAS</h1>
      <div className="container text-center">
  <div className="row">
    <div className="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/JcNXCX9/Copihue-photo1-compressor.jpg"} titulobtn={"FLORA"} colorcaps={"#FF3F42"}/>
       </div>
       <div className="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/rbfSsNN/puma-chileno-puma-concolor-puma.jpg"} titulobtn={"FAUNA"} colorcaps={"#FFC842"}/>
       </div>
       <div className="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/wCct8pD/altiplano-chileno.jpg"} titulobtn={"BIOMA"} colorcaps={"#457692"}/>
       </div>
      </div>
    </div>
  </div>
</div>
      
  );
}


export default SeleccionCapsulas;

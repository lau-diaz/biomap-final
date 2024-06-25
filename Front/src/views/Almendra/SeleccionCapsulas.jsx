import { useState } from 'react'
import MenuCapsulas from '../../components/Almendra/MenuCapsulas.jsx'
import '../../components/Almendra/MenuMapaCapsulas.css'


function SeleccionCapsulas() {
  return (
      <div className="App">
      <div class="container text-center">
      <h1  style={{color: "#3B2D2D", fontFamily: "Righteous, sans-serif"}}>CÁPSULAS INFORMATIVAS</h1>
      <div class="container text-center">
  <div class="row">
    <div class="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/JcNXCX9/Copihue-photo1-compressor.jpg"} titulobtn={"FLORA"} colorcaps={"#FF3F42"}/>
       </div>
       <div class="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/rbfSsNN/puma-chileno-puma-concolor-puma.jpg"} titulobtn={"FAUNA"} colorcaps={"#FFC842"}/>
       </div>
       <div class="col"> 
       <MenuCapsulas imagencaps={"https://i.ibb.co/wCct8pD/altiplano-chileno.jpg"} titulobtn={"BIOMA"} colorcaps={"#457692"}/>
       </div>
      </div>
    </div>
  </div>
</div>
      
  );
}


export default SeleccionCapsulas;

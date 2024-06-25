import React from 'react';
import './CapsulaEducativa.css';

function CapsulaEducativa() {
  return (

    <div className="capsula-educativa , container mt-10" id ="container">
      
      <div className="contenido-izquierdo, col-md-3">
      <div className="header">
        <h1 className="titulo">Zorro Culpeo</h1>
        <h2 className="subtitulo">(Pseudalopex culpaeus Molina)</h2>
      </div>
        <p className="sub-titulo">Es la especie de zorro más grande que vive en Chile, pudiendo medir hasta 1 a 1,2 m de largo total, de los cuales casi 35 a 45 cm corresponden a la cola.</p>
        <p className="sub-titulo">Sus principales presas son mamíferos pequeños o medianos, como liebres, conejos y otros roedores. Eventualmente, también pueden atrapar aves, reptiles, huevos y consumir algunos frutos y frutas para complementar su nutrición.</p>
        <div className="imagenes-simbolo ">
          <div>
            <p className='alimentacion'>Alimentacion omnivora:</p>
          </div>
          <img src="http://imgfz.com/i/wmipbnA.png" alt="Símbolo 1" className="simbolo" />
          <img src="http://imgfz.com/i/yePx5R9.png" alt="Símbolo 2" className="simbolo" />
          <img src="http://imgfz.com/i/1EvilHV.png" alt="Símbolo 3" className="simbolo" />
        </div>
      </div>
      <div className="contenido-central, col-md-6" style={{ textAlign: 'center' }}>
        <img src="https://i.imgur.com/qs6h0BD.png" alt="Imagen central" className="imagen-central" />
        <div className="contenedor-centro-bajo">
          <div className="columna">
            <img src="https://i.imgur.com/qs6h0BD.png" alt="Imagen central inferior 1" className="imagen-central-inferior-1" />
            <h6>descripcion</h6>
           </div>
          <div className="columna">
             <img src="https://i.imgur.com/qs6h0BD.png" alt="Imagen central inferior 2" className="imagen-central-inferior-2" />
             <h6>descripcion</h6>
          </div>
          <div className="columna">
             <img src="https://i.imgur.com/qs6h0BD.png" alt="Imagen central inferior 3" className="imagen-central-inferior-3" />
            <h6>descripcion</h6>
          </div>
        </div>
      </div>
      <div className="contenido-derecho, col-md-3 " style={{ textAlign: 'right' }}>
        <p className="parrafo"><h3>Distribucion</h3></p>
        <p className="parrafo">Vive desde Arica hasta Magallanes, en diversos hábitats como las montañas, desiertos, valles, bosques y estepas. Construyen sus refugios dentro de troncos huecos o en cuevas.</p>
        <img src="http://imgfz.com/i/Tk74OiN.png" alt="Símbolo derecho" className="simbolo-derecho" /> <p><h6>Especie amenazada</h6></p>
      
      </div>
    </div>
  );
}

export default CapsulaEducativa;


import React, { useState, useEffect } from 'react';
import './CapsulaEducativa.css';
import { useParams } from 'react-router-dom';


function CapsulaEducativa() {
  
  const { id } = useParams();
  const [capsula, setCapsula] = useState(null);

  useEffect(() => {
    if (!id) return
    fetch(`http://localhost:4001/api/capsula/${id}`)
      .then(response => response.json())
      .then(data => setCapsula(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, [id]);

  if (!capsula) {
    return <div>Loading...</div>;
  } 

  return (
    <div id='cuerpoCapsula'>
      <div className="capsula-educativa container mt-10" id="container">

        <div className="contenido-izquierdo col-md-3">
          <div className="header">
            <h1 className="titulo">{capsula.nombre}</h1>
            <h2 className="subtitulo">{capsula.nombreCtf}</h2>
          </div>
          <p className="sub-titulo">{capsula.descripcion1}</p>
          <p className="sub-titulo">{capsula.descripcion2}</p>
          <div className="imagenes-simbolo">
            <p className='alimentacion'>{capsula.tipoAlim}</p>
            <img src={capsula.imgAlim1} alt="Símbolo 1" className="simbolo" />
            <img src={capsula.imgAlim2} alt="Símbolo 2" className="simbolo" />
            <img src={capsula.imgAlim3} alt="Símbolo 3" className="simbolo" />
          </div>
        </div>

        <div className="contenido-central col-md-6" style={{ textAlign: 'center' }}>
          <img src={capsula.imgCentral} alt="Imagen central" className="imagen-central" />
          <div className="contenedor-centro-bajo">
            <div className="columna">
              <img src={capsula.imgDato1} alt="Imagen central inferior 1" className="imagen-central-inferior-1" />
              <h6>{capsula.dato1}</h6>
            </div>
            <div className="columna">
              <img src={capsula.imgDato2} alt="Imagen central inferior 2" className="imagen-central-inferior-2" />
              <h6>{capsula.dato2}</h6>
            </div>
            <div className="columna">
              <img src={capsula.imgDato3} alt="Imagen central inferior 3" className="imagen-central-inferior-3" />
              <h6>{capsula.dato3}</h6>
            </div>
          </div>
        </div>

        <div className="contenido-derecho col-md-3" style={{ textAlign: 'right' }}>
          <h3>Distribución</h3>
          <p className="parrafo">{capsula.descripcion3}</p>
          <div className="simbolo-derecho">
            <img src="http://imgfz.com/i/Tk74OiN.png" alt="Símbolo derecho" className="simbolo-derecho" />
            <h6>{capsula.amenazado ? 'Amenazado' : 'No amenazado'}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapsulaEducativa;
import React, { useState, useEffect } from 'react';
import './EcosistemaCapsula.css';
import { useParams } from 'react-router-dom';


function EcosistemaCapsula() {
  
  const { id } = useParams();
  const [ecosistema, setEcosistema] = useState(null);

  useEffect(() => {
    if (!id) return
    fetch(`http://localhost:4001/api/ecosistema/${id}`)
      .then(response => response.json())
      .then(data => setEcosistema(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, [id]);

  if (!ecosistema) {
    return <div>Loading...</div>;
  } 

  return (
    <div id='cuerpoCapsula'>
      <div className="capsula-educativa container mt-10" id="container">

        <div className="contenido-izquierdo col-md-3">
          <div className="header">
            <h1 className="titulo">{ecosistema.nombre}</h1>
          </div>
          <p className="sub-titulo">{ecosistema.descripcion1}</p>
          <p className="sub-titulo">{ecosistema.descripcion2}</p>
        </div>

        <div className="contenido-central col-md-6" style={{ textAlign: 'center' }}>
          <img src={ecosistema.fotoEcosistema} alt="Imagen central" className="imagen-central" />
          <div className="contenedor-centro-bajo">
            <div className="columna">
              <img src={ecosistema.imgDato1} alt="Imagen central inferior 1" className="imagen-central-inferior-1" />
              <h6>{ecosistema.dato1}</h6>
            </div>
            <div className="columna">
              <img src={ecosistema.imgDato2} alt="Imagen central inferior 2" className="imagen-central-inferior-2" />
              <h6>{ecosistema.dato2}</h6>
            </div>
            <div className="columna">
              <img src={ecosistema.imgDato3} alt="Imagen central inferior 3" className="imagen-central-inferior-3" />
              <h6>{ecosistema.dato3}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcosistemaCapsula;
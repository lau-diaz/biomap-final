import React from 'react'
import Pestanias from '../../components/Lau/Pestanias'
import './Ecosistema.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EcosistemaCapsula from '../../components/geral/EcosistemaCapsula.jsx'

function Ecosistema() {
    const { id } = useParams();
    const [ecosistema, setEcosistema] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:4001/api/ecosistema/${id}`)
        .then(response => response.json())
        .then(data => setEcosistema(data))
        .catch(error => console.error('Error al obtener datos:', error));
    }, [id]);
  
    if (!ecosistema) {
      return <div>Loading...</div>;
    } 

    return (
        <div>
            <div className='row'>
                <div className='col-9'>
                    <EcosistemaCapsula />
                </div>
                <div className='col-3' id='pestanias'>
                    {ecosistema.capsulas.map(capsula => (
                        <Link key={capsula._id} to={`/capsula/${capsula._id}`} className='custom-link'>
                        <Pestanias nombreRegion={capsula.nombre}/>
                        </Link>
                    )
                    )}

                </div>
            </div>
        </div>
    )}

    export default Ecosistema
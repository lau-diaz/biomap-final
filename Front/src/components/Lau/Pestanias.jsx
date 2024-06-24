import React from 'react'
import './Pestanias.css'

function Pestanias({fotoRegion, nombreRegion, subRegion}) {
    return (
            <div className='contenedor'>
                <div className='pestania'>
                    <div className='foto-pestania'>
                        <img id='fotoRegion' src={fotoRegion}/>
                    </div>
                    <div className='texto-pestania'>
                        <div>{nombreRegion}</div>
                        <div className='subTexto'>{subRegion}</div>
                    </div>
                </div>
            </div>
     )
}

export default Pestanias
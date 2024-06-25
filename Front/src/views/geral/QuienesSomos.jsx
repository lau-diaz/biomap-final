import Imagentexto from '/src/components/geral/Imagentexto.jsx'
import Textoimagen from '/src/components/geral/Textoimagen.jsx'
import Botonimagen from '/src/components/geral/Botonimagen.jsx'

function QuienesSomos() {
 
    return (
        <div>
        <Textoimagen />
        <Imagentexto/>
        <h1 className="row justify-content-center mt-4" style={{ fontSize: '55px' }}>CONOCE AL EQUIPO DE BIOMAP</h1>
        <Botonimagen/>
        </div>
    )
  }
  
  export default QuienesSomos
  
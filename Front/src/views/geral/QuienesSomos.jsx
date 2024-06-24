
import Navbar from './componentes/Navbar'
import Botonimagen from './componentes/Botonimagen'
import Imagentexto from './componentes/Imagentexto'
import Textoimagen from './componentes/Textoimagen'
import Footer from './componentes/Footer'

function QuienesSomos() {
 
    return (
      <div>
      <Navbar/>
        <div>
        <Textoimagen/>
        <Imagentexto/>
        <h1 className="row justify-content-center">Conoce al equipo de Biomap</h1>
        <Botonimagen/>
        </div>
    
      <Footer/>
      </div>
  
    )
  }
  
  export default QuienesSomos
  
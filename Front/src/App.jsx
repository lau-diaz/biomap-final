import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './views/Lau/Inicio.jsx'
import Plantilla1 from './templates/Plantilla1.jsx'
import Plantilla2 from './templates/Plantilla2.jsx'
import MapaGeneral from './views/Lau/MapaGeneral.jsx'
import Region from './views/Lau/Region.jsx'
import QuienesSomos from './views/geral/QuienesSomos.jsx'
import QueEsBiomap from './views/Cata/QueEsBiomap.jsx'
import MenuSeleccion from './views/Almendra/MenuSeleccion.jsx'
import SeleccionCapsulas from './views/Almendra/SeleccionCapsulas.jsx'
import CapsulaEducativa from './components/geral/CapsulaEducativa.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Plantilla1 />}>
          <Route index element={<Inicio />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/que-es-biomap' element={<QueEsBiomap />} />
        </Route>
        <Route path='/' element={<Plantilla2 />}>
          <Route path='/menu' element={<MenuSeleccion />} />
          <Route path='/capsulas' element={<SeleccionCapsulas />}/>
          <Route path='/mapa-general' element={<MapaGeneral />} />
          <Route path='/region/:id' element={<Region />} />
          <Route path='/capsula' element={<CapsulaEducativa />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

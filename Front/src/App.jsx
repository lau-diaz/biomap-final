import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import Ecosistema from './views/Lau/Ecosistema.jsx'
import Login from './views/Iris/login.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Plantilla1 />}>
          <Route index element={<Inicio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/que-es-biomap' element={<QueEsBiomap />} />
        </Route>
        <Route path='/' element={<Plantilla2 />}>
          <Route path='/menu' element={<MenuSeleccion />} />
          <Route path='/capsulas' element={<SeleccionCapsulas />} />
          <Route path='/mapa-general' element={<MapaGeneral />} />
          <Route path='/region/:id' element={<Region />} />
          <Route path='/capsula/:id' element={<CapsulaEducativa />} />
          <Route path='/ecosistema/:id' element={<Ecosistema />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

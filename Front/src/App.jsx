import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './views/Lau/Inicio.jsx'
import Plantilla1 from './templates/Plantilla1.jsx'
import Plantilla2 from './templates/Plantilla2.jsx'
import MapaGeneral from './views/Lau/MapaGeneral.jsx'
import Region from './views/Lau/Region.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Plantilla1 />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path='/' element={<Plantilla2/>}>
          <Route path='/mapa-general' element={<MapaGeneral/>}/>
          <Route path='/region/:id' element={<Region/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

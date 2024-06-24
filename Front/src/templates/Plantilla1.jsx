import React from 'react'
import Navbar from '/src/components/Navbar.jsx'
import Footer from '/src/components/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Plantilla1() {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}

//Falta agregar vistas Gerald y Cata

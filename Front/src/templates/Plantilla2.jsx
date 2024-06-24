import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../components/Lau/Navbar2'

export default function Plantilla2() {
  return (
    <div>
        <Navbar2/>
        <Outlet/>
    </div>
  )
}

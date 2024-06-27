import React from 'react'
import './MenuMapaCapsulas.css'
import { Link } from 'react-router-dom'

function MenuMapaCapsulas({texto, colorbtn, ubicacion}) {
    return (
      <div>
        <h2 className="text" style={{color: "#3B2D2D", fontFamily: "Righteous, sans-serif"}}>{texto}</h2>
        <br/>    
        <Link to={ubicacion}>
        <button type="button" className="btn" style={{ width: '18rem', backgroundColor: colorbtn, color: '#FBFAF6'}}> HAZ CLICK AQUÍ </button>
        </Link>
        </div>
    )
  }

export default MenuMapaCapsulas
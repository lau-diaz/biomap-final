import React from 'react'
import './MenuMapaCapsulas.css'

function MenuMapaCapsulas({texto, colorbtn}) {
    return (
      <div>
        <h2 className="text" style={{color: "#3B2D2D", fontFamily: "Righteous, sans-serif"}}>{texto}</h2>
        <br/>    
        <button type="button" className="btn" style={{ width: '18rem', backgroundColor: colorbtn, color: '#FBFAF6'}}> HAZ CLICK AQUÍ </button>
        </div>
    )
  }

export default MenuMapaCapsulas

import React from 'react'
import './MenuCapsulas.css'


function MenuCapsulas({imagencaps, titulobtn, colorcaps}) {
  return (
    <div>
    <div className="card" style={{width: '18rem', backgroundColor: colorcaps}}>
    <div className="circle-img">
    <img src= {imagencaps} alt="copihue" />
    </div>
     <div className="card-body">
      <br/>
   <button type="button" className="btn btn-light"><b>{titulobtn}</b></button>
      </div>
   </div>
 </div>
  )
}

export default MenuCapsulas;
import React from 'react'

export default function BotonCapsulas({nombreCapsula}) {
  return (
    <div>
        <button type="button" className="btn btn-warning">
            {nombreCapsula}
        </button>
    </div>
  )
}

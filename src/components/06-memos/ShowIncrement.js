import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log("me volvi a generar")

  return (
    
    <button
        className="btn btn-outline-dark"
        onClick= {()=>{
            increment( 5 );
        }}
    >
        Incrementar
    </button>
  )
})

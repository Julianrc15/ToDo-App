import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import '../01-useState/02-useEffect/effects.css'


export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (

    <div>
      
      <h1 >RealExampleRef</h1>
      <hr/>

    { show && < MultipleCustomHooks/>}

      <button 
        className='btn btn-success mt5'
        onClick={() => {
          setShow ( !show );
        }}
      >
        Show / hide
      </button>

    </div>

  )
}

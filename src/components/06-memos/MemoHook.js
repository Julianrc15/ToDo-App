import React, { useMemo, useState } from 'react'
import'../01-useState/02-useEffect/effects.css'
import {useCounter} from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado';


export const MemoHook = () => {

const {counter, increment} = useCounter(2500);
const[show, setShow] = useState(true);



const memoProcesoPesado = useMemo(()=>procesoPesado(counter),[counter])


  return (
    <div>
        
        <h1>
            Counter: <small>{ counter }</small>
        </h1>
        <hr/>

        <p>{memoProcesoPesado}</p>

        <button className='btn btn-dark'
        onClick={increment}
        >
            +1
        </button>

        <button className='btn btn-outline-dark ml 3'
        onClick={()=>{
            setShow(!show)
        }}
        >
          Show / hide {JSON.stringify( show )}
        </button>
        
        </div>
        
  )
}

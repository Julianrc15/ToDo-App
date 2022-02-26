import React, { useRef,useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../05-useLayoutEffect/layout.css'

export const Layout = () => {

  const  {counter,  increment} = useCounter(1);

  const {data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`)
  // console.log(state);

  const {quote} =!!data && data[0];

  const pitag = useRef();

 useLayoutEffect(() => {

  console.log( pitag.current.getBoundingClientRect() );

  }, [quote])


  return (

    <div>
    <h1>BreakingBad Qoutes</h1>
    <hr/>
    {
      
      <blockquote className="blockquote text-end">

        <p 
        className="mb-3"
        ref={pitag}
        >
          {quote}</p>
        

      </blockquote>

     

    }

    <button 
    onClick={ increment }
    className='btn btn-primary'
    >
      Next quote
    </button>

    

    </div>
  )
}


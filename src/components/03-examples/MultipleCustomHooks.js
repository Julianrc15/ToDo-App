import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../01-useState/02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const  {counter,  increment} = useCounter(1);

  const {loading,data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`)
  // console.log(state);

  const {author,quote} =!!data && data[0];

  console.log(loading);


  return (

    <div>
    <h1>BreakingBad Qoutes</h1>
    <hr/>
    {
      loading
      ?
      (
        <div className="alert alert-info text-center">
            loading...
        </div>
      ) 
      :
      (

        <blockquote className="blockquote text-end">

          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer"> {author} </footer>

        </blockquote>

      )


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

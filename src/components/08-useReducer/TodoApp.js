import React, { useReducer } from 'react'
import { todoReducer } from './todoRedurcer'

import './styles.css'



const initialState =[{
    id: new Date().getTime(),
    desc:'aprender React',
    done: false
}]

export const TodoApp = () => {

const [ todos ] = useReducer ( todoReducer, initialState)

 

return (

    <div>
        <h1>
        TODO - App ( { todos.length } )
        </h1>
        <hr/>

        <div className='row'>
            <div className='col-7'>

                    <ul className='list-group list-group-flush'>
                {  todos.map( ( todo, i ) => (
                    <li
                    key={ todo.id }
                    className="list-group-item"
                    > 
                        <p className='text-center'>  { i + 1}.{ todo.desc } </p>
                        <button className='btn btn-danger'>Borrar</button>
                    </li>
                ))
                
                }

                </ul>
            </div>
            <div className='col-5'>

                <h4>Add TODO</h4>
                <hr/>

                <form>
                   <input
                   type="text"
                   name="descriptión"
                   autoComplete='off'                                     
                   />
                   <button className='btn btn-outline-primary mt-1 btn-block'>
                       Add
                   </button>

                </form>


            </div>
        
        </div>
      
    </div>

  )
}

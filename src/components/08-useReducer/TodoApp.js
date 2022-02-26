import React, { useReducer,useEffect } from 'react'
import { todoReducer } from './todoRedurcer'

import './styles.css'
import { useForm } from '../../hooks/useForm'




const init = () => {


return JSON.parse(localStorage.getItem('todos'))|| [];

    // return [{
    //     id: new Date().getTime(),
    //     desc:'Aprender React',
    //     done: false
        
    // }]

}

export const TodoApp = () => {

const [ todos, dispatch ] = useReducer ( todoReducer, [], init)

const [{ description }, handleInputChange, reset]=useForm({
    description: ''
});

useEffect ( () => {
localStorage.setItem('todos', JSON.stringify( todos ))
}, [todos])


 const handleSubmit = (e) => {
    e.preventDefault()

    if(description.trim().length<=1){
        return;
    }

    const newTodo = {
        id:new Date().getTime(),
        desc: description,
        done: false
    };

    const action = {
        type: 'add',
        payload:newTodo
    }
    dispatch(action);
    reset();
 }

 const handleDelete = ( todoId ) => {
   
    const action = {
        type: 'delete',
        payload:todoId
    }
    dispatch(action);
   
 }

return (

    <div>
        <h1>
        TODO - App ( { todos.length } )
        </h1>
        <hr/>

        <div className='row'>
            <div className='col-8'>

                    <ul className='list-group list-group-flush'
                    >
                {  todos.map( ( todo, i ) => (
                    <li
                    key={ todo.id }
                    className="list-group-item"
                    > 
                        <p className='text-center'>  { i + 1}.{ todo.desc } </p>
                        <button 
                        onClick= { () => handleDelete(todo.id) }
                        className='btn btn-danger'
                        
                        >Borrar</button>
                    </li>
                ))
                
                }

                </ul>
            </div>
            <div className='col-4 '>

                <h4>Add TODO</h4>
                <hr/>

                
                <form
                className='row justify-content-center mt-2'     
                onSubmit={ handleSubmit } >
                   <input 
                   
                   type="text"
                   name="description"
                   autoComplete='off'
                   onChange={ handleInputChange }  
                   value={ description }                                   
                   />
                   <button 
                   type="submit"
                   className='btn btn-outline-primary mt-1 btn-block col-5 align-self-center mt-3'>
                       Add
                   </button>

                </form>
                

            </div>
        
        </div>
      
    </div>

  )
}

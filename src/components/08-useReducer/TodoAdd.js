import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset]=useForm({
        description: ''
    });

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
    
        handleAddTodo( newTodo );
        reset();
     }
    

    return (
    <>
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
    </>
  )
}

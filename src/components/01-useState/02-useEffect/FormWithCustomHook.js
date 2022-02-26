import React, { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import '../02-useEffect/effects.css';



export const FormWithCutomHook = () => {

   const [formValues, handleInputChange] = useForm ({
       name:'',
       email:'',
       password:''
   });

   const{ name, email, password } = formValues;

   useEffect (()=>{
       console.log('Email Cambió')
   }, [email])


   const handelSubmit = (e) => {
       e.preventDefault();

       console.log( formValues );
   }
  
  return (


    <form onSubmit={handelSubmit}>
    <h1>FormWithCutomHook</h1>
    <hr/>


    <div className='form-group'>
        <input
        type="text"
        name="name"
        className="form-control"
        placeholder="tu nombre"
        autoComplete="off"
        value={name}
        onChange={ handleInputChange }
             
        />
    </div>
    <div className='form-group'>
        <input
        type="text"
        name="email"
        className="form-control"
        placeholder="tuemail@mail.com "
        autoComplete="off"
        value={ email }
        onChange={ handleInputChange }
             
        />
    </div>
    <div className='form-group'>
        <input
        type="password"
        name="password"
        className="form-control"
        placeholder="******"
        value={ password }
        onChange={ handleInputChange }
             
        />
    </div>
    
    <button type="submit" className='btn btn-primary'>Guardar</button>
   

    </form>
  )
}
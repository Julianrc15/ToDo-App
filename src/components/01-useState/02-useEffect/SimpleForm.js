import React, { useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { Message } from './Message';


export const SimpleForm = () => {

   const [formState, setFormState] = useState ({
       name:'',
       email:''
   });

   const{ name, email } = formState;

useEffect ( () => {

// console.log('hey')

} , []);
useEffect ( () => {

       } , [formState]);

useEffect ( () => {
       
        } , [email]);
           
    

const handleInputChange = ({target}) => {

    

    setFormState({
        ...formState,
        [ target.name ]:target.value
    })
};


  return (


    <>
    <h1>SimpleForm</h1>
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
    
   { ( name ==='antenas') && <Message/> }

    </>
  )
}

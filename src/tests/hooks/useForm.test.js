import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm'

describe('Pruebas en use form',()=>{

    const initialForm ={
        name:'felipe',
        email:'felipe@example.com'
    }

    test('debe regresar un formulario por defecto',()=>{
        const {result}= renderHook( ()=> useForm( initialForm));
        const [formValues, handleInputChange,reset] = result.current;

        expect (formValues).toEqual(initialForm);
        expect (typeof handleInputChange).toBe('function');
        expect (typeof reset).toBe('function');

    })

    test('debe cambiar el valor del formulario (name)',()=>{
        const {result}= renderHook( ()=> useForm( initialForm));
        const [, handleInputChange] = result.current;

        act( ()=> {

            handleInputChange({
                target:{
                name: 'name',
                value: 'melisa'
                }
            });
        });

        const[formValues]= result.current;
        expect(formValues).toEqual( {...initialForm, name:'melisa'} );


    
    })


    test('debe de reestablecer el formulario con reset',()=>{
        const {result}= renderHook( ()=> useForm( initialForm));
        const [, handleInputChange, reset] = result.current;

        act( ()=> {

            handleInputChange({
                target:{
                name: 'name',
                value: 'melisa'
                }
            });

            reset();
        });

        const[formValues]= result.current;
        expect(formValues).toEqual( initialForm );
    
    })


})
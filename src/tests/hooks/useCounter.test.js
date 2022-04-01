import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter}from '../../hooks/useCounter.js';


describe('pruebas en useCounter',()=>{

    test('debe de retornar valores por defecto',()=>{
         const {result}= renderHook( ()=> useCounter())
         

         expect(result.current.counter).toBe(10);
         expect(typeof result.current.increment).toBe('function');
         expect(typeof result.current.decrement).toBe('function');
         expect(typeof result.current.reset).toBe('function');

    })

    test('debe de tener counter en 100',()=>{
        const {result}= renderHook( ()=> useCounter(100))
        

        expect(result.current.counter).toBe(100);
     
   })

   test('debe incrementar en el counte en 1',()=>{
       const {result}=renderHook( ()=> useCounter(100))
       const  {increment}=result.current;
       
       act(()=>{
         increment();  
       })

       const {counter}= result.current;
       expect(counter).toBe(101)
      console.log(counter)
   })


test('debe decrementar en el counte en 1',()=>{
    const {result}=renderHook( ()=> useCounter(100))
    const  {decrement}=result.current;
    
    act(()=>{
      decrement();  
    })

    const {counter}= result.current;
    expect(counter).toBe(99)
   
    })

test('debe resetear en el counter en 1',()=>{
        const {result}=renderHook( ()=> useCounter(100))
        const  {reset,increment}=result.current;
        
        act(()=>{
          increment();
          reset()  
        })
    
        const {counter}= result.current;
        expect(counter).toBe(100)
       
    })

})
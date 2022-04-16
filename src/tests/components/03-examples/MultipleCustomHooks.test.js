import React from 'react';
import {shallow}from 'enzyme';
import {MultipleCustomHooks} from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')




describe('Multiplespruebas en MultipleCustomHooks',()=>{

   
        beforeEach( () => {
            useCounter.mockReturnValue({
                counter: 10,
                increment: () => {}
            })
        })

    test('debe mostrase correctamente',()=>{

        useFetch.mockReturnValue({
            data:null, 
            loading:true, 
            error:null
        })

        const wrapper= shallow (<MultipleCustomHooks/>)

        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar información', ()=>{

        useFetch.mockReturnValue({
            data:[{
                author: 'John',
                quote:'hola Mundo'
            }], 
            
            loading:false, 
            error:null
        });
        const wrapper= shallow (<MultipleCustomHooks/>)

        expect(wrapper.find('.alert').exists() ).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('John')

        console.log(wrapper.html())

    })



})
import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { hookApp } from '../hookApp';



describe('Pruebas en hookApp',()=> {

const wrapper = shallow(<hookApp/>);

test('Snapshot debe coincidir', () => {

    expect ( wrapper ).toMatchSnapshot();
  
});


})
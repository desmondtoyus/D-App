import React from 'react'
import {renderWithProviders, cleanup} from '../__tests__/setup/test-setup'
import App from './App'

 afterEach(cleanup)

describe('<App />', ()=>{
   const wrapper = renderWithProviders(<App/>);
     it('should renders the component', () => {
      expect (wrapper).toBeTruthy();
    });
    it('should Match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
     });
})

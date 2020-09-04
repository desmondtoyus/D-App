import React from 'react'
import {renderWithProviders, cleanup} from '../__tests__/setup/test-setup'
import App from './App'

 afterEach(cleanup)


 it('should take a snapshot', () => {
    const { asFragment } = renderWithProviders(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   });
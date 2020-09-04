import React from 'react'
import {renderWithProviders, cleanup} from '../__tests__/setup/test-setup'
import App from './App'

 afterEach(cleanup)


 it('should take a snapshot', () => {
    const { asFragment } = renderWithProviders(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   });

// test("Wrapper not logged in", () => {
//   const { getByText } = renderWithProviders(<Wrapper />, {
//     store: { user: null }
//   });
//   getByText("login");
//   getByText("register");
// });

// test("Wrapper logged in", () => {
//   const { getByText } = renderWithProviders(<Wrapper />, {
//     reduxState: {
//       user: {
//         name: "bob"
//       }
//     }
//   });

//   getByText("bob");
// });
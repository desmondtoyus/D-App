// // test-utils.js
// import React from 'react'
// import { render as rtlRender } from '@testing-library/react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import '@testing-library/jest-dom/extend-expect';
// // import { initialState as reducerInitialState, reducer } from './reducer'
// import {initialState as reducerInitialState} from '../../__mocks__/mockState';
// import  {reducer } from '../../app/redux/reducers/menu'

// function render(
//   ui,
//   {
//     initialState = reducerInitialState,
//     store = createStore(reducer, initialState),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }




import React from "react";
import { Provider } from "react-redux";
import { render as rtlRender  } from "@testing-library/react";
import { MemoryRouter  } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { initialState }  from "../../__mocks__/mockState";
import reducers from '../../app/redux/combinedReducers';
const middleware = [reduxThunk];




function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(reducers, reduxState || initialState, composeWithDevTools(applyMiddleware(...middleware)))
  
  return  rtlRender (<HelmetProvider><MemoryRouter><Provider store={store}>{ui}</Provider></MemoryRouter></HelmetProvider>);
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders }
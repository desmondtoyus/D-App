import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './combinedReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [reduxThunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

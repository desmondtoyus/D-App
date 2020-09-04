import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './combinedReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [reduxThunk];

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)))

export { store }
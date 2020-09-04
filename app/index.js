import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {  HelmetProvider } from 'react-helmet-async';
import App from './app';
import { store } from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import '!file-loader?name=[name].[ext]!./assets/images/favicon.jpeg';


ReactDom.render(
    <Provider store={store}>
        <HelmetProvider><App/></HelmetProvider>
    </Provider>, document.getElementById('root') || document.createElement('div') //for testing
);
registerServiceWorker();
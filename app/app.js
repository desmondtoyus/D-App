import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import NotFound from './views/404';
import Portfolio from './views/portfolio';
import Contact from './views/contact';
import Examples from './views/example';

const App =(props)=>(
    <Router>
        <Switch>
        <Route exact path='/'><Home/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/portfolio'><Portfolio/></Route>
            <Route path='/contact'><Contact/></Route>
            <Route path='/example'><Examples/></Route>
            <Route exact path='*'><NotFound/></Route>
        </Switch>
    </Router>
)

export default App;



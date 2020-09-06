import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import NotFound from './views/404';
import Portfolio from './views/portfolio';
import Contact from './views/contact';

const App =(props)=>(
    <Router>
        <Switch>
            <Route exact path='/' component ={Home} />
            <Route path='/about' component ={About} />
            <Route path='/portfolio' component ={Portfolio} />
            <Route path='/contact' component ={Contact} />
            <Route exact path='*' component ={NotFound} />
        </Switch>
    </Router>
)

export default App;



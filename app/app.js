import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';

const App =()=>(
    <Router>
        <Switch>
            <Route path='/' component ={Home} />
        </Switch>
    </Router>
)

export default App;
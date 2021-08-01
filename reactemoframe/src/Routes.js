import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/login' exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/register' exact component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

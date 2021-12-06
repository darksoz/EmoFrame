import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sam from './Pages/Sam/Sam';
import { isAuthenticated, getUsertype } from './services/auth';
import UserRegister from './Pages/UserRegister/UserRegister';
import Results from './Pages/Results/Results';
import Leap from './Pages/Leap/Leap';
import SamResult from './Pages/SamResult/SamResult'; 
import Zanon from './Pages/Zanon/Zanon';
import Sus from './Pages/Sus/Sus';
import SusResult from './Pages/SusResult/SusResult';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const LimitedAccessRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() && getUsertype() === "Specialist") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/login' exact component={Login}/>
                <PrivateRoute path='/dashboard' exact component={Dashboard}/>
                <PrivateRoute path='/sam' exact component={Sam}/>
                <LimitedAccessRoute path='/userregister' exact component={UserRegister}/>
                <LimitedAccessRoute path='/results' exact component={Results}/>
                <PrivateRoute path='/leap' exact component={Leap}/>
                <LimitedAccessRoute Path='samResult' exact component={SamResult}/>
                <PrivateRoute path='/zanon' exact component={Zanon}/>
                <PrivateRoute path='/sus' exact component={Sus}/>
                <LimitedAccessRoute Path='/susResult' exact component={SusResult}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

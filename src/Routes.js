import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sam from './Pages/Sam/Sam';
import { isAuthenticated, getUsertype } from './services/auth';
import UserRegister from './Pages/UserRegister/UserRegister';
import Leap from './Pages/Leap/Leap';
import SamResult from './Pages/SamResult/SamResult'; 
import Zanon from './Pages/Zanon/Zanon';
import Sus from './Pages/Sus/Sus';
import Panas from './Pages/Panas/Panas';
import PageResult from './Pages/PageResult/PageResult';
import SusResult from './Pages/SusResult/SusResult';
import LeapResult from './Pages/LeapResult/LeapResult';
import PanasResult from './Pages/PanasResult/PanasResult';
import SearchResult from './Pages/SearchResult/SearchResult';
import ZanonResult from './Pages/ZanonResult/ZanonResult';
import Page from './Pages/Page/Page';
import ContactUs from './Pages/ContactUs/ContactUs';


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )} />
  );
}

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
                <Route path='/login' exact component={Login}/>
                <PrivateRoute path='/dashboard' exact component={Dashboard}/>
                <PrivateRoute path='/sam' exact component={Sam}/>
                <LimitedAccessRoute path='/register' exact component={UserRegister}/>
                <LimitedAccessRoute path='/searchresults' exact component={SearchResult}/>
                <PrivateRoute path='/leap' exact component={Leap}/>
                <PrivateRoute path='/zanon' exact component={Zanon}/>
                <PrivateRoute path='/sus' exact component={Sus}/>
                <PrivateRoute path='/panas' exact component={Panas}/>
                <PrivateRoute path='/page' exact component={Page}/>
                <Route path='/contactus' exact component={ContactUs}/>
                <LimitedAccessRoute path='/samResult' exact component={SamResult}/>
                <LimitedAccessRoute path='/samResult/:id' exact component={SamResult}/>
                <LimitedAccessRoute path='/leapResult' exact component={LeapResult}/>
                <LimitedAccessRoute path='/leapResult/:id' exact component={LeapResult}/>
                <LimitedAccessRoute path='/pageResult' exact component={PageResult}/>
                <LimitedAccessRoute path='/pageResult/:id' exact component={PageResult}/>
                <LimitedAccessRoute path='/panasResult' exact component={PanasResult}/>
                <LimitedAccessRoute path='/panasResult/:id' exact component={PanasResult}/>
                <LimitedAccessRoute path='/susResult/:id' exact component={SusResult}/>
                <LimitedAccessRoute path='/susResult' exact component={SusResult}/>
                <LimitedAccessRoute path='/zanonResult' exact component={ZanonResult}/> 
                <LimitedAccessRoute path='/zanonResult/:id' exact component={ZanonResult}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

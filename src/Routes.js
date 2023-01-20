import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
import SusResult from './Pages/SusResult/SusResult';
import LeapResult from './Pages/LeapResult/LeapResult';
import PanasResult from './Pages/PanasResult/PanasResult';
import SearchResult from './Pages/SearchResult/SearchResult';
import ZanonResult from './Pages/ZanonResult/ZanonResult';
import Page from './Pages/Page/Page';
import ContactUs from './Pages/ContactUs/ContactUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import RecSys from './Pages/RecSys/RecSys';
import PageResult from './Pages/PageResult/PageResult';
import AboutUs from './Pages/AboutUs/AboutUs';
import MoreInfo from './Pages/MoreInfo/MoreInfo';
import Poms from './Pages/Poms/Poms';
import Whoqol from './Pages/Whoqol/Whoqol';
import PomsResult from './Pages/PomsResult/PomsResult';
import PageSearch from './Pages/PageSearch/PageSearch';
import PageResultQuestions from './Pages/PageResult/PageResultQuestions';


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
                <Route path='/' exact component={LandingPage}/>
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
                <PrivateRoute path='/poms' exact component={Poms}/>
                <PrivateRoute path='/whoqol' exact component={Whoqol}/>
                <PrivateRoute path='/pagesearch' exact component={PageSearch}/>
                <Route path='/contactus' exact component={ContactUs}/>
                <Route path='/aboutus' exact component={AboutUs}/>
                <Route path='/moreinfo' exact component={MoreInfo}/>
                <Route path='/recommendation' exact component={RecSys}/>
                <LimitedAccessRoute path='/samResult' exact component={SamResult}/>
                <LimitedAccessRoute path='/samResult/:id' exact component={SamResult}/>
                <LimitedAccessRoute path='/leapResult' exact component={LeapResult}/>
                <LimitedAccessRoute path='/leapResult/:id' exact component={LeapResult}/>
                <LimitedAccessRoute path='/pageResult' exact component={PageResult}/>
                <LimitedAccessRoute path='/pageResult/:id' exact component={PageResult}/>
                <LimitedAccessRoute path='/pageResultQuestions/:id' exact component={PageResultQuestions}/>
                <LimitedAccessRoute path='/panasResult' exact component={PanasResult}/>
                <LimitedAccessRoute path='/panasResult/:id' exact component={PanasResult}/>
                <LimitedAccessRoute path='/susResult/:id' exact component={SusResult}/>
                <LimitedAccessRoute path='/susResult' exact component={SusResult}/>
                <LimitedAccessRoute path='/zanonResult' exact component={ZanonResult}/> 
                <LimitedAccessRoute path='/zanonResult/:id' exact component={ZanonResult}/>
                <LimitedAccessRoute path='/pomsresult' exact component={PomsResult}/>
                <LimitedAccessRoute path='/pomsresult/:id' exact component={PomsResult}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

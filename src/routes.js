/**
 * Routes : returns routes of our application for router
 */
import React from 'react';
import { Route , Switch } from 'react-router-dom';
/****************** Components ******************/

import Home from './Components/Home/home';
import FourOFour from './Components/FourOFour/fourofour';
import PromiseCmponent  from './Components/Topics/promise';
import AsyncAwait from './Components/Topics/async-await';
import Callback from './Components/Topics/callback';
import Topics from './Components/Topics/topics';


const Routes = () => {
   return (
       <Switch>
           <Route path="/topics/callback" exact component={Callback}/>
           <Route path="/topics/promise" exact component={PromiseCmponent}/>
           <Route path="/topics/async-await" exact component={AsyncAwait}/>
           <Route path="/topics" exact component={Topics}/>
           <Route path="/" exact component={Home}/>
           <Route component={FourOFour}/>        
       </Switch>
   )
}

export default Routes;
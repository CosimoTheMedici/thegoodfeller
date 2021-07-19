import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Tests from '../components/Views/Test/Test1';
import Dash from '../components/commons/Content';

import Test from '../components/Views/Test/Test2';

const AppRoutes = () => {
  
    return (
      
          <Router>
        <Switch>
          <Route exact path="/admin/test2" component={ Tests } />
          <Route path="/test1" exact component={ Test } />
          <Route exact path="/" component={ Dash } />

        </Switch>
        </Router>
      
    );
}

export default AppRoutes;
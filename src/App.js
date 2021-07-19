import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';

import AppRoutes from './routes/Routes';



function App() {
  return (
    < >
      {/*<Nav/>*/}
      <Router>
      <AppRoutes/>
      </Router>
    </>
  )
}

export default App

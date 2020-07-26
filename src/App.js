import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Main from './routes';
import Login from './routes/Login';
import Plan from './routes/Plan';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/plan' component={Plan} />
    </Switch>
  );
}

export default App;

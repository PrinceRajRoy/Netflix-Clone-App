import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Main from './routes';
import Login from './routes/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path='/login' component={Login} />
    </Switch>
  );
}

export default App;

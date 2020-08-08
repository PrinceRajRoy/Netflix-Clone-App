import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Main from './routes';
import Login from './routes/Login';
import Plan from './routes/Plan';
import Browse from './routes/Browse';
import BrowseContextProvider from './contexts/BrowseContext';
import AuthContextProvider from './contexts/AuthContext';
import Auth from './routes/Auth';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path='/plan' component={Plan} />
        <BrowseContextProvider>
          <Auth path='/login' initial component={Login} />
          <Auth path='/browse' component={Browse} />
        </BrowseContextProvider>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;

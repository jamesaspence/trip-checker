import React from 'react';
import LoggedInBoundary from './auth/LoggedInBoundary';
import PackContainer from './packing/PackContainer';
import AuthContainer from './auth/AuthContainer';
import AppBar from './common/AppBar';
import ErrorBoundary from './common/ErrorBoundary';
import HomeContainer from './home/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';

const renderLoggedInBoundary = () => (
  <LoggedInBoundary>
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/packing" exact component={PackContainer} />
    </Switch>
  </LoggedInBoundary>
);

const App = () => (
  <Router>
    <div className="app">
      <AppBar />
      <ErrorBoundary>
        <Switch>
          <Route path="/login" exact component={AuthContainer} />
          <Route path="/" render={renderLoggedInBoundary} />
        </Switch>
      </ErrorBoundary>
    </div>
  </Router>
);

export default App;
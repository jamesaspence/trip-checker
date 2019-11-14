import React from 'react';
import PackContainer from './packing/PackContainer';
import AppBar from './common/AppBar';
import ErrorBoundary from './common/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <AppBar />
      <ErrorBoundary>
        <Switch>
          <Route path="/packing" exact component={PackContainer} />
          <Route path="/" exact render={() => <Redirect to="/packing" />} />
        </Switch>
      </ErrorBoundary>
    </div>
  </Router>
);

export default App;
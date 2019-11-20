import React from 'react';
import PackContainer from './packing/PackContainer';
import HomeContainer from './HomeContainer';
import AppBar from './common/AppBar';
import ErrorBoundary from './common/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HOME, PACKING } from '../util/routes';

import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <AppBar />
      <ErrorBoundary>
        <Switch>
          <Route path={PACKING} exact component={PackContainer} />
          <Route path={HOME} exact component={HomeContainer} />
        </Switch>
      </ErrorBoundary>
    </div>
  </Router>
);

export default App;
import React from 'react';
import PackContainer from './packing/PackContainer';
import AuthContainer from './auth/AuthContainer';
import AppBar from './common/AppBar';
import ErrorBoundary from './common/ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss';


const App = () => (
  <Router>
    <div className="app">
      <AppBar />
      <ErrorBoundary>
        <Route path="/login" exact component={AuthContainer} />
        <Route path="/" component={PackContainer} />
      </ErrorBoundary>
    </div>
  </Router>
);

export default App;
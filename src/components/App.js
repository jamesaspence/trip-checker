import { connect } from 'react-redux';
import React, { Component } from 'react';
import PackContainer from './packing/PackContainer';
import AuthContainer from './auth/AuthContainer';
import AppBar from './common/AppBar';
import ErrorBoundary from './common/ErrorBoundary';

import './App.scss';

const mapStateToProps = state => ({
  user: state.auth.user
});

class App extends Component {
  render () {
    const { user } = this.props;

    return (
      <div className="app">
        <AppBar />
        <ErrorBoundary>
          { typeof user === 'undefined' ? <AuthContainer /> : <PackContainer /> }
        </ErrorBoundary>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
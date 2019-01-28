import { connect } from 'react-redux';
import React, { Component } from 'react';
import PackContainer from './packing/PackContainer';
import AuthContainer from './auth/AuthContainer';
import AppBar from './common/AppBar';

import './App.scss';

const mapStateToProps = state => ({
  user: state.user
});

class App extends Component {
  render () {
    const { user } = this.props;

    return (
      <div className="app">
        <AppBar />
        { typeof user === 'undefined' ? <AuthContainer /> : <PackContainer /> }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
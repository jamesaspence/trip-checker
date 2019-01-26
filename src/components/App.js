import React from 'react';
import { Component } from 'react';
import PackContainer from './packing/PackContainer';
import AuthContainer from './auth/AuthContainer';

import './App.scss';

class App extends Component {
  render () {
    return <PackContainer/>;
  }
}

export default App;
import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

import './AppBar.scss';

const mapStateToProps = state => ({
  user: state.user
});

const AppBar = ({ user }) => (
  <div className="app-bar">
    <h1 className="app-bar-header">Packit</h1>
    { typeof user !== 'undefined' ? <Nav /> : '' }
  </div>
);

export default connect(mapStateToProps)(AppBar);
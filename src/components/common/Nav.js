import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

import './Nav.scss';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Nav = ({ logout }) => (
  <div className="nav">
    <button type="button" className="nav-button nav-profile">Profile</button>
    <button type="button" className="nav-button nav-logout" onClick={logout}>Logout</button>
  </div>
);

export default connect(state => state, mapDispatchToProps)(Nav);
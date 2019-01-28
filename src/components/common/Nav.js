import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { capitalizeFirst } from '../../util/text';

import './Nav.scss';

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Nav = ({ logout, user }) => (
  <div className="nav">
    <h4 className="nav-name">Hi, {capitalizeFirst(user.first_name)} </h4>
    <button type="button" className="nav-button nav-profile">Profile</button>
    <button type="button" className="nav-button nav-logout" onClick={logout}>Logout</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
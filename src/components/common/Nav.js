import React from 'react';

import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <button type="button" className="nav-button nav-profile">Profile</button>
    <button type="button" className="nav-button nav-logout">Logout</button>
  </div>
);

export default Nav;
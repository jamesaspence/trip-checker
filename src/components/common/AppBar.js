import React from 'react';
import './AppBar.scss';
import { Link } from 'react-router-dom';
import { HOME } from '../../util/routes';

const AppBar = () => (
  <div className="app-bar">
    <Link className="app-link" to={HOME}><h1 className="app-bar-header">Packit</h1></Link>
  </div>
);

export default AppBar;
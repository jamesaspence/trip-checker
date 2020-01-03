import React from 'react';
import { connect } from 'react-redux';
import './AppBar.scss';
import { Link } from 'react-router-dom';
import { HOME, NEW_LIST, PACKING } from '../../util/routes';
import packageInfo from '../../../package.json';

const mapStateToProps = ({ packing: { questions } }) => ({
  items: questions
});

const AppBar = ({ items }) => (
  <div className="app-bar">
    <Link className="app-link" to={HOME}><h1 className="app-bar-header">Packit</h1><small>v{packageInfo.version}</small></Link>
    <nav className="main-nav">
      <Link className="nav-link" to={NEW_LIST}>New List</Link>
      { items.length > 0 &&
        <Link className="nav-link" to={PACKING}>Resume Packing</Link>
      }
    </nav>
  </div>
);

export default connect(mapStateToProps)(AppBar);
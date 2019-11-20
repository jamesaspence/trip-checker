import React from 'react';
import { Link } from 'react-router-dom';
import { NEW_LIST } from '../util/routes';

const HomeContainer = () => (
  <div className="home-container">
    <Link to={NEW_LIST}>
      New List!
    </Link>
  </div>
);

export default HomeContainer;
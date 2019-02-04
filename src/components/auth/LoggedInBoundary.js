import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.auth.user
});

const LoggedInBoundary = ({ user, children }) => {
  if (typeof user === 'undefined') {
    return <Redirect to="/login" />;
  }

  return children;
};

export default connect(mapStateToProps)(LoggedInBoundary);
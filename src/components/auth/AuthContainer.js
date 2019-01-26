import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => {};

// const mapDispatchToProps = () => {};

const AuthContainer = () => {
  return (
    <div className="full-container">
      <h1>HI!</h1>
    </div>
  );
};

export default connect(mapStateToProps)(AuthContainer);
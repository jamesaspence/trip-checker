import React, { Component } from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.renderError = this.renderError.bind(this);

    this.state = {
      error: undefined
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  renderError() {
    return (
      <div className="error-wrapper">
        <h1 className="error-header"><span role="img" aria-label="grimacing">😬</span> OH NO <span role="img" aria-label="grimacing">😬</span></h1>
        <p className="error-message">Something unexpected went wrong. We must've crossed the i's and dotted the t's.</p>
        <p className="error-message">Terribly sorry for the inconvenience. Please try again later.</p>
        <button type="button" className="error-link">It's okay, I'm ready to trust you again (resets app)</button>
      </div>
    )
  }

  render() {
    const { children } = this.props;
    const { error } = this.state
    if (typeof error !== 'undefined') {
      return this.renderError();
    }

    return children;
  }
}

export default ErrorBoundary;
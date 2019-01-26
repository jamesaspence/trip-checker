import React, { Component } from 'react';

import './AuthForm.scss';

class AuthForm extends Component {
  static defaultProps = {
    requiredFields: []
  };

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.wrapInput = this.wrapInput.bind(this);

    this.state = {
      formValues: {},
      errors: []
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const { formValues } = this.state;
    const { requiredFields } = this.props;
    const errors = [];

    requiredFields.forEach(key => {
      if (!formValues.hasOwnProperty(key) || typeof formValues[key] !== 'string' || formValues[key].trim() === '') {
        errors.push(key);
      }
    });

    if (errors.length > 0) {
      this.setState({
        errors
      });
      return;
    }

    this.props.onSubmit(this.state.formValues);
  }

  onChange(name, value) {
    const { formValues } = this.state;

    formValues[name] = value;

    this.setState({
      formValues
    });
  }

  wrapInput(input, key) {
    const { errors } = this.state;

    return React.cloneElement(input, {
      key,
      onChange: this.onChange,
      error: errors.includes(input.props.name)
    });
  }

  render() {
    const { active, header, children } = this.props;

    return (
      <form className={`auth-form ${active ? `active` : ``}`} onSubmit={this.onSubmit}>
        <h3 className="auth-form-header">{header}</h3>
        <div className="form-items">
          {children.map(this.wrapInput)}
          <button className="submit-form">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AuthForm;

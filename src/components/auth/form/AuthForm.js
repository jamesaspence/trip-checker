import React, { Component } from 'react';

import './AuthForm.scss';

const withOnChange = (input, key, onChange) => {
  return React.cloneElement(input, {
    key,
    onChange
  });
};

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      formValues: {}
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.formValues);
  }

  onChange(name, value) {
    const { formValues } = this.state;

    formValues[name] = value;

    this.setState({
      formValues
    });
  }

  render() {
    const { active, header, children } = this.props;

    return (
      <form className={`auth-form ${active ? `active` : ``}`} onSubmit={this.onSubmit}>
        <h3 className="auth-form-header">{header}</h3>
        <div className="form-items">
          {children.map((input, i) => withOnChange(input, i, this.onChange))}
          <button className="submit-form">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AuthForm;

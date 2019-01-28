import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateForm } from '../../../actions/auth';

import './AuthForm.scss';

const mapStateToProps = (state, ownProps) => ({
  errors: state.validation[ownProps.name]
});

const mapDispatchToProps = dispatch => ({
  validateForm: (name, errors) => dispatch(validateForm(name, errors))
});

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
      formValues: {}
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const { formValues } = this.state;
    const { requiredFields, name } = this.props;
    const errors = {};

    requiredFields.forEach(key => {
      if (!formValues.hasOwnProperty(key) || typeof formValues[key] !== 'string' || formValues[key].trim() === '') {
        errors[key] = `Please fill in the '${key}' field.`;
      }
    });

    if (Object.keys(errors).length > 0) {
      // this.setState({
      //   errors
      // });
      this.props.validateForm(name, errors);
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
    const { errors = {} } = this.props;

    return React.cloneElement(input, {
      key,
      onChange: this.onChange,
      error: errors.hasOwnProperty(input.props.name)
    });
  }

  render() {
    const { active, children, errors = {} } = this.props;

    return (
      <form className={`auth-form ${active ? `active` : ``}`} onSubmit={this.onSubmit}>
        <div className="form-errors">
          {Object.keys(errors).map(key => <p key={key} className="error-message">{errors[key]}</p>)}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

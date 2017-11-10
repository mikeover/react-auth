import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  renderField = ({ input, label, type, meta: {touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input className="form-control" {...input} type={type} />
      </div>
      {touched && ((error && <div className="error"><small>{error}</small></div>))}
    </div>
  );

  handleFormSubmit(values) {
    console.log("FORM SUBMIT", values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field name="email" label="Email" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="password" label="Password" component={this.renderField} type="password" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="passwordConfirm" label="Confirm Password" component={this.renderField} type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please confirm password";
  } else if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match";
  }

  return errors;
}

export default connect(null, actions)(reduxForm({
  form: 'signup',
  validate
})(Signup));

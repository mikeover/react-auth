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
      {touched && ((error && <div className="alert alert-danger p-1"><small>{error}</small></div>))}
    </div>
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form>
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

export default connect(null, actions)(reduxForm({
  form: 'signup'
})(Signup));

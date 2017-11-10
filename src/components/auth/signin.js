import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  renderField = ({ input, label, type, meta: {touched, error} }) => (
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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field name="email" label="Email" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="password" label="Password" component={this.renderField} type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default connect(null, actions)(reduxForm({
  form: 'signin'
})(Signin));

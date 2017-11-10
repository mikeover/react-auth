import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxForm from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    return (
      <div>
        Signup
      </div>
    );
  }
}

export default connect(null, actions)(Signup);

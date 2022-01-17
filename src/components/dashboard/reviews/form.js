import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

class ReviewForm extends Component {
  state = {};

  render() {
    const state = this.state;
    return (
      <Formik>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <h1>hoge</h1>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(ReviewForm);

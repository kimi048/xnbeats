import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewForm extends Component {
  render() {
    return <div>form</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(ReviewForm);

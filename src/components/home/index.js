import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../store/actions";

import Masonry from "react-masonry-css";
import { Container, Card } from "react-bootstrap";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts(6, null));
  }

  render() {
    return <div>Home</div>;
  }
}
const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Home);

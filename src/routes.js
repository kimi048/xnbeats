import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import Login from "./components/login";
import Contact from "./components/contact";

import ToastsComponent from "./utils/toasts";
import { connect } from "react-redux";
import { autoSignIn } from "./components/store/actions";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(autoSignIn());
  }

  app = (auth) => (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
        <ToastsComponent />
      </BrowserRouter>
    </>
  );

  render() {
    const { auth } = this.props;
    return auth.checkingAuth ? this.app(auth) : "...loading";
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Routes);

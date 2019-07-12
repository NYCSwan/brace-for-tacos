import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error("ErrorBoundary caught err", err, info);
  }
  componentWillUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          There was an errror with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait 5 seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

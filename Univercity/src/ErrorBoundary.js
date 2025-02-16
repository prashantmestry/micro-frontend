import React, { Component } from "react";
//
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentCatchError(err, info) {
    console.log("Error info for log");
    this.setState({
      error: err,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Boundary catch the error : {this.state.error}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

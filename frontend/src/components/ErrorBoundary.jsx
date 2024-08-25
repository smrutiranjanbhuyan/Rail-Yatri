import React from 'react';
import {ErrorComponent } from '.'; 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent message="Something went wrong. Please try again later." />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

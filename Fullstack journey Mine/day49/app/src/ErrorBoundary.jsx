import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
  console.log("Error:", error);
  console.log("Info:", info);
  }

  render() {
    if (this.state.hasError) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Oops! Something went wrong 😢</h2>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  );
}

    return this.props.children;
  }
}

export default ErrorBoundary;
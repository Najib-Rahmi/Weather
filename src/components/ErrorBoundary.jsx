import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 text-white">
          <div className="max-w-md rounded-lg bg-white/10 p-6 text-center backdrop-blur">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="mb-4 text-sm text-slate-200">
              The weather app could not render properly. Please try again.
            </p>
            <button
              onClick={this.handleRetry}
              className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

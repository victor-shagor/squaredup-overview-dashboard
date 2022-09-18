import React, { ErrorInfo } from "react";
import AppCrash from "./AppCrash";

interface ErrorBoundaryProps {
  hasError: boolean;
  error: any;
}

export default class ErrorBoundary extends React.Component<
  any,
  ErrorBoundaryProps
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <AppCrash error={this.state.error} />;
    }

    // If there is no error just render the children component.
    return this.props.children;
  }
}

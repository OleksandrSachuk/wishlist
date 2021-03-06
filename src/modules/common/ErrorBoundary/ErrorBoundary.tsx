import * as React from 'react';

interface IProps {
  children: Object;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Object) {
    return { hasError: true };
  }

  componentDidCatch(error: Object, info: Object) {
    // eslint-disable no-console
    console.error('error', error);
    console.error('info', info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Error</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;

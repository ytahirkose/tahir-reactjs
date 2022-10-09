import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: any;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        errorInfo: {}
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorInfo:_.cause };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            errorInfo,
        });
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: '#000',
                }}
                >
                    <h1>Something went wrong.</h1>
                    <h2>Please reload page.</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.errorInfo && this.state.errorInfo.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import { Component } from 'react';
import { instanceId } from '../../services/metrics.service.js';
import { getStoredData, updateStoredData } from '../../services/storage.service.js';
import { DebugLine, ErrorInfoContainer } from './ErrorBoundary.styles';

const SECONDS_TIMEOUT = 5;
const MAX_SECONDS_TIMEOUT = 80;
const DEV_MODE = import.meta?.env?.VITE_DEV_MODE;

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    message: '',
    timestamp: undefined,
  };

  getTimeoutMultiplier(newErrorTimestamp: Date, lastErrorTimestamp: Date) {
    let timeoutMultiplier = getStoredData('timeoutMultiplier', 1);
    const differenceBetweenTwoDates =
      (newErrorTimestamp.getTime() - lastErrorTimestamp.getTime()) / 1000;

    // Multiplying two times to prevent reset at last stage
    if (differenceBetweenTwoDates >= MAX_SECONDS_TIMEOUT * 2) {
      timeoutMultiplier = 1;
    }

    return timeoutMultiplier;
  }

  componentDidCatch(error: Error) {
    const now = new Date();
    const lastErrorTimestamp = getStoredData('lastErrorTimestamp', now);
    const timeoutMultiplier = this.getTimeoutMultiplier(now, new Date(lastErrorTimestamp));

    updateStoredData('timeoutMultiplier', timeoutMultiplier);
    updateStoredData('lastErrorTimestamp', now);

    this.setState({
      hasError: true,
      message: error?.message,
    });

    if (!DEV_MODE) {
      // in DEV_MODE, React rethrows error so there's no need to capture it
      // captureException(error);

      setTimeout(() => {
        if (timeoutMultiplier * SECONDS_TIMEOUT < MAX_SECONDS_TIMEOUT) {
          updateStoredData('timeoutMultiplier', 2 * timeoutMultiplier);
        }

        window.location.reload();
      }, timeoutMultiplier * SECONDS_TIMEOUT * 1000);
    }
  }

  render() {
    const now = new Date();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { children } = this.props;
    const { hasError, message } = this.state;
    const lastErrorTimestamp = getStoredData('lastErrorTimestamp', now);
    const timeoutMultiplier = this.getTimeoutMultiplier(now, new Date(lastErrorTimestamp));

    if (hasError) {
      return (
        <ErrorInfoContainer>
          {message && <DebugLine className="cs-mar-1-t">{message}</DebugLine>}
          <DebugLine className="cs-mar-1-t">{timeoutMultiplier}</DebugLine>
          <DebugLine className="cs-mar-1-t">Instance ID: {instanceId}</DebugLine>
        </ErrorInfoContainer>
      );
    }

    return children;
  }
}

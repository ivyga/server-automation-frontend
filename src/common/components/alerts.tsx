import React, { useState } from 'react';

interface AlertProps {
  message: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  dismissible?: boolean;
}

export const Alert: React.FC<AlertProps> = ({ message, variant = 'primary', dismissible = true }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`alert alert-${variant} ${dismissible ? 'alert-dismissible' : ''}`} role="alert">
      {message}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setVisible(false)}
        ></button>
      )}
    </div>
  );
};

export const SuccessAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
  <Alert message={message} variant="success" dismissible={dismissible} />
);

export const WarningAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
  <Alert message={message} variant="warning" dismissible={dismissible} />
);

export const FailureAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
  <Alert message={message} variant="danger" dismissible={dismissible} />
);

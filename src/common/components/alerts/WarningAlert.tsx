import React from 'react';
import { Alert } from './Alert';

export const WarningAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
    <Alert message={message} variant="warning" dismissible={dismissible} />
);

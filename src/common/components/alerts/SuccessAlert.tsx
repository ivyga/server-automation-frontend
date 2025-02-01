import React from 'react';
import { Alert } from './Alert';

export const SuccessAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
    <Alert message={message} variant="success" dismissible={dismissible} />
);

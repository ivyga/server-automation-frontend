import React from 'react';
import { Alert } from './Alert';

export const FalureAlert: React.FC<{ message: string; dismissible?: boolean }> = ({ message, dismissible = true }) => (
    <Alert message={message} variant="danger" dismissible={dismissible} />
);

import React from 'react';
import { Button } from './Button';

import './Button.css';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, ...props }) => {
    return <Button {...props} label={label} variant="primary" />;
};

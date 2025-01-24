import React from 'react';
import { Button } from './Button';

import './Button.css';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, ...props }) => {
    const adjustedProps = { ...props, label, variant: 'primary' };
    return <Button {...adjustedProps} />;
};

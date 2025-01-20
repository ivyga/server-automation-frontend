import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

import './Button.scss';

// Note:  This puts a thin wrapper over react-bootstrap Button to make the Button definiton more terse for the
// usual situation where the text displayed on the button is a simple string.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: string;
}

export const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
    return (
        <BootstrapButton variant={variant} {...props}>
            {label}
        </BootstrapButton>
    );
};

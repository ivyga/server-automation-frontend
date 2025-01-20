import React from 'react';
import { Button } from './Button';

import './Button.scss';

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, ...props }) => {
    const adjustedProps = { ...props, label, variant: 'secondary' };
    return <Button {...adjustedProps} />;
};

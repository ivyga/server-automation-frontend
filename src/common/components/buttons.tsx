import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, className = '', ...props }) => {
  return (
    <button
      className={`btn ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-primary ${props.className}`} />;
};

export const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-secondary ${props.className}`} />;
};

export const SuccessButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-success ${props.className}`} />;
};

export const DangerButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-danger ${props.className}`} />;
};

export const WarningButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-warning ${props.className}`} />;
};

export const InfoButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-info ${props.className}`} />;
};

export const LightButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-light ${props.className}`} />;
};

export const DarkButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`btn-dark ${props.className}`} />;
};

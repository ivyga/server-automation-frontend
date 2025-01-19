import React from 'react';

interface BadgeProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
    return <span className={`badge bg-${variant}`}>{text}</span>;
};

export const PrimaryBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="primary" />;

export const SecondaryBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="secondary" />;

export const SuccessBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="success" />;

export const DangerBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="danger" />;

export const WarningBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="warning" />;

export const InfoBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="info" />;

export const LightBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="light" />;

export const DarkBadge: React.FC<{ text: string }> = ({ text }) => <Badge text={text} variant="dark" />;

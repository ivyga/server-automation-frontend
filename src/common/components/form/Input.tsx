import React from 'react';

export interface InputProps {
    name: string;
    label: string;
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const Input: React.FC<InputProps> = ({ name, label, value = '', onChange = () => {} }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                type="text"
                className="form-control"
                id={name}
                name={name}
                value={value}
                onChange={onChange} // Make sure to use the onChange passed from Form
            />
        </div>
    );
};

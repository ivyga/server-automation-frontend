import React from 'react';

export interface CheckboxProps {
    name: string;
    label: string;
    value?: boolean; // This will be controlled by the Form component when cloning.
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // This will be set by the Form component when cloning.
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label, value = false, onChange = () => {} }) => {
    return (
        <div className="form-group">
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id={name}
                    name={name}
                    checked={value}
                    onChange={onChange} // Ensure this uses the onChange passed from the Form component
                />
                <label htmlFor={name} className="form-check-label">
                    {label}
                </label>
            </div>
        </div>
    );
};

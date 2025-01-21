import React from 'react';

export interface RadioButtonGroupProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ id, label, options, value = '', onChange }) => (
    <div className="form-group">
        <label className="form-label">{label}</label>
        <div>
            {options.map((option) => (
                <div key={option.value} className="form-check">
                    <input
                        type="radio"
                        id={`radio-${id}-${option.value}`}
                        name={id}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        className="form-check-input"
                    />
                    <label htmlFor={`${id}-${option.value}`} className="form-check-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>
);

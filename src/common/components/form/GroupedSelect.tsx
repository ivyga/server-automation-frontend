import React from 'react';

export interface GroupedSelectProps {
    name: string;
    label: string;
    groups: {
        label: string;
        options: { value: string; label: string }[];
    }[];
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const GroupedSelect: React.FC<GroupedSelectProps> = ({
    name,
    label,
    groups,
    value = '',
    onChange = () => {},
}) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <select
            id={name}
            name={name}
            className="form-select"
            value={value}
            onChange={onChange} // Use the onChange passed from Form
        >
            {groups.map((group, groupIndex) => (
                <optgroup key={groupIndex} label={group.label}>
                    {group.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    </div>
);

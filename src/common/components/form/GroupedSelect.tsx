import React from 'react';

export interface GroupedSelectProps {
    id: string;
    label: string;
    groups: {
        label: string;
        options: { value: string; label: string }[];
    }[];
    value?: string; // Do not directly set. This is set by Form Component when cloning.
    onChange?: (_event: React.ChangeEvent<HTMLSelectElement>) => void; // Do not directly set. This is set by Form Component when cloning.
}

export const GroupedSelect: React.FC<GroupedSelectProps> = ({ id, label, groups, value = '', onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <select
            id={id}
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

import React, { useState, ReactNode, ChangeEvent, FormEvent } from 'react';
import { Input } from './Input';
import { Password } from './Password';
import { Select } from './Select';
import { DatalistSelect } from './DatalistSelect';
import { GroupedSelect } from './GroupedSelect';
import { RadioButtonGroup } from './RadioButtonGroup';

import './form.scss';
import { Checkbox } from './Checkbox';

const formElementTypes = [Input, Password, Select, DatalistSelect, GroupedSelect, RadioButtonGroup, Checkbox] as const;

interface FormProps {
    children: ReactNode;
    // eslint-disable-next-line no-unused-vars
    onSubmit: (formData: { [key: string]: string | boolean }) => void;
    initialFormData: { [key: string]: string | boolean };
    className?: string;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, initialFormData, className = 'default' }) => {
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let key = event.target.name;
        let value: string | boolean = event.target.value;

        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                value = true;
            } else {
                value = false;
            }
        }

        if (event.target.id.startsWith('radio-')) {
            const parts = event.target.name.split('-');
            key = parts[1];
            value = parts[2];
        }

        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); // Prevent page reload on form submission
        onSubmit(formData); // Call the onSubmit callback with the formData
    };

    const cloneWithProps = (child: ReactNode): ReactNode => {
        if (React.isValidElement(child)) {
            const childType = child.type;
            if (formElementTypes.includes(childType)) {
                const childProps = child.props as { name: string };
                return React.cloneElement(child, {
                    value: formData[childProps.name] ?? '',
                    onChange,
                });
            }

            if (child.props.children) {
                return React.cloneElement(child, {
                    children: React.Children.map(child.props.children, cloneWithProps),
                });
            }
        }
        return child;
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {React.Children.map(children, cloneWithProps)}
        </form>
    );
};

/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDataContext } from '../../../app/DataProvider';

export interface CreateBuildProps {
    heading: string;
}

export const CreateBuild: React.FC<CreateBuildProps> = () => {
    const { customers, oems, isLoading } = useDataContext();
    const [formData, setFormData] = useState({
        created_by: '',
        customer_name: '',
        project_name: '',
        build_name: '',
        device_oem: '',
        serial_number: '',
        ip_address: '',
        user_login: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setFormData({ ...formData, [name]: value });
    };

    const isFieldValid = (value: string, list: string[]) => {
        return list.includes(value.trim());
    };
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate a form submission process
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
        }, 2000);
    };

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    return (
        <>
            <h1>Create Build</h1>
            <br />
            <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="card shadow rounded p-4">
                        <h2 className="text-lg font-semibold mb-4">Build Details</h2>
                        <div className="space-y-4">
                            <div className="">
                                <label htmlFor="created_by">Engineer Name:</label>
                                <input
                                    type="text"
                                    id="created_by"
                                    name="created_by"
                                    value={formData.created_by}
                                    onChange={handleChange}
                                    className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="customer_name">Customer Name:</label>
                                <input
                                    type="text"
                                    id="customer_name"
                                    name="customer_name"
                                    value={formData.customer_name}
                                    onChange={handleChange}
                                    list="customers"
                                    className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                <datalist id="customers">
                                    {customers.map((customer, index) => (
                                        <option key={index} value={customer} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="">
                                <label htmlFor="project_name" className="">
                                    Project Name:
                                </label>
                                <input
                                    type="text"
                                    id="project_name"
                                    name="project_name"
                                    value={formData.project_name}
                                    onChange={handleChange}
                                    list="projects"
                                    data-error={
                                        !isFieldValid(formData.project_name, ['Project X', 'Project Y'])
                                            ? 'true'
                                            : 'false'
                                    }
                                    className={` ${
                                        isFieldValid(formData.project_name, ['Project X', 'Project Y'])
                                            ? 'border-gray-300'
                                            : 'border-red-500'
                                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                                    aria-label="Project Name"
                                />
                                <datalist id="projects">
                                    <option value="Project X" />
                                    <option value="Project Y" />
                                </datalist>
                            </div>
                            <div className="">
                                <label htmlFor="build_name" className="">
                                    Build Name:
                                </label>
                                <input
                                    type="text"
                                    id="build_name"
                                    name="build_name"
                                    value={formData.build_name}
                                    onChange={handleChange}
                                    className={` ${
                                        isFieldValid(formData.build_name, []) ? 'border-gray-300' : 'border-gray-300'
                                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                                    aria-label="Build Name"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="device_oem" className="">
                                    OEM:
                                </label>
                                <input
                                    type="text"
                                    id="device_oem"
                                    name="device_oem"
                                    value={formData.device_oem}
                                    onChange={handleChange}
                                    list="oems"
                                    data-error={!isFieldValid(formData.device_oem, oems) ? 'true' : 'false'}
                                    className={` ${
                                        isFieldValid(formData.device_oem, oems) ? 'border-gray-300' : 'border-red-500'
                                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                                    aria-label="OEM"
                                />
                                <datalist id="oems">
                                    {oems.map((oem, index) => (
                                        <option key={index} value={oem} />
                                    ))}
                                </datalist>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded p-4">
                        <h2>ETO Device</h2>
                        <div className="space-y-4">
                            {[
                                { id: 'serial_number', label: 'Serial Number' },
                                { id: 'ip_address', label: 'IP Address' },
                                { id: 'user_login', label: 'User Login' },
                            ].map(({ id, label }) => (
                                <div key={id} className="">
                                    <label htmlFor={id}>{label}:</label>
                                    <input
                                        type="text"
                                        id={id}
                                        name={id}
                                        value={formData[id as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            ))}
                            <div className="relative">
                                <label htmlFor="password">Password:</label>
                                <div className="flex items-center border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-2"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="bs-button secondary"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Placeholder for Services */}
                    <div className="card shadow rounded p-4">
                        <h2 className="text-lg font-semibold mb-4">Services</h2>
                        <p className="text-sm text-gray-500">Services functionality coming soon...</p>
                    </div>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <button type="button" onClick={() => window.history.back()} className="bs-button secondary">
                        Cancel
                    </button>
                    <button type="reset" className="bs-button secondary">
                        Reset
                    </button>
                    <button type="submit" className="bs-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </>
    );
};

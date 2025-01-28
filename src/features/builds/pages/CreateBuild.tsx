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

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

    const isFieldValid = (fieldValue: string) => fieldValue.trim() !== '';

    return (
        <>
            <h1>Create Build</h1>
            <br />
            <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto space-y-6">
                {/* Arrange cards in a responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Build Details Card */}
                    <div className="card shadow rounded p-4">
                        <h2 className="text-lg font-semibold mb-4">Build Details</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label htmlFor="created_by" className="text-sm font-medium text-gray-700 w-1/3">
                                    Engineer Name:
                                </label>
                                <input
                                    type="text"
                                    id="created_by"
                                    name="created_by"
                                    value={formData.created_by}
                                    onChange={handleChange}
                                    className={`block w-2/3 rounded-md border ${
                                        isFieldValid(formData.created_by) ? 'border-gray-300' : 'border-red-500'
                                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                                    aria-label="Engineer Name"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="customer_name" className="text-sm font-medium text-gray-700 w-1/3">
                                    Customer Name:
                                </label>
                                <input
                                    type="text"
                                    id="customer_name"
                                    name="customer_name"
                                    value={formData.customer_name}
                                    onChange={handleChange}
                                    list="customers"
                                    className="block w-2/3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    aria-label="Customer Name"
                                />
                                <datalist id="customers">
                                    {customers.map((customer, index) => (
                                        <option key={index} value={customer} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="project_name" className="text-sm font-medium text-gray-700 w-1/3">
                                    Project Name:
                                </label>
                                <input
                                    type="text"
                                    id="project_name"
                                    name="project_name"
                                    value={formData.project_name}
                                    onChange={handleChange}
                                    list="projects"
                                    className="block w-2/3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    aria-label="Project Name"
                                />
                                <datalist id="projects">
                                    <option value="Project X" />
                                    <option value="Project Y" />
                                </datalist>
                            </div>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="build_name" className="text-sm font-medium text-gray-700 w-1/3">
                                    Build Name:
                                </label>
                                <input
                                    type="text"
                                    id="build_name"
                                    name="build_name"
                                    value={formData.build_name}
                                    onChange={handleChange}
                                    className={`block w-2/3 rounded-md border ${
                                        isFieldValid(formData.build_name) ? 'border-gray-300' : 'border-red-500'
                                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                                    aria-label="Build Name"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="device_oem" className="text-sm font-medium text-gray-700 w-1/3">
                                    OEM:
                                </label>
                                <input
                                    type="text"
                                    id="device_oem"
                                    name="device_oem"
                                    value={formData.device_oem}
                                    onChange={handleChange}
                                    list="oems"
                                    className="block w-2/3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

                    {/* ETO Device Card */}
                    <div className="card shadow rounded p-4">
                        <h2 className="text-lg font-semibold mb-4">ETO Device</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    id: 'serial_number',
                                    label: 'Serial Number',
                                },
                                { id: 'ip_address', label: 'IP Address' },
                                { id: 'user_login', label: 'User Login' },
                                { id: 'password', label: 'Password' },
                            ].map(({ id, label }) => (
                                <div key={id} className="flex items-center space-x-4">
                                    <label htmlFor={id} className="text-sm font-medium text-gray-700 w-1/3">
                                        {label}:
                                    </label>
                                    <input
                                        type={id === 'password' ? 'password' : 'text'}
                                        id={id}
                                        name={id}
                                        value={formData[id as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="block w-2/3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder for Services */}
                    <div className="card shadow rounded p-4">
                        <h2 className="text-lg font-semibold mb-4">Services</h2>
                        <p className="text-sm text-gray-500">Services functionality coming soon...</p>
                    </div>
                </div>

                {/* Action Buttons */}
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

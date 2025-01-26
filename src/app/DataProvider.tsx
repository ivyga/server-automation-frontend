import React, { createContext, useContext, useEffect, useState } from 'react';
import { enhancedFetch } from '../common/utilities/enhancedFetch';
import { getBackendUrl } from '../common/utilities/getBackendUrl';

interface DataContextProps {
    customers: string[];
    oems: string[];
    isLoading: boolean;
}

const backendUrl = getBackendUrl();
const DataContext = createContext<DataContextProps | undefined>(undefined);

// NOTE: This loads customers and oems on startup to make them available to child components without passing them as props.
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [customers, setCustomers] = useState<string[]>([]);
    const [oems, setOems] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customersResponse = await enhancedFetch(`${backendUrl}/customers`);
                const oemsResponse = await enhancedFetch(`${backendUrl}/oems`);
                setCustomers(await customersResponse.json());
                setOems(await oemsResponse.json());
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Failed to fetch customers and/or oems:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return <DataContext.Provider value={{ customers, oems, isLoading }}>{children}</DataContext.Provider>;
};

export const useDataContext = (): DataContextProps => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

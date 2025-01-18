import React, { useState } from 'react';
import { StatePopulation } from '../api/getStatePopulations';

interface StatesPopulationProps {
    data: StatePopulation[];
}

export const StatesPopulation: React.FC<StatesPopulationProps> = ({ data }) => {
    const [sortedData, setSortedData] = useState<StatePopulation[]>(data);
    const [sortColumn, setSortColumn] = useState<keyof StatePopulation>('state');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (column: keyof StatePopulation) => {
        const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortDirection(direction);

        const sorted = [...data].sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedData(sorted);
    };

    const renderSortIndicator = (column: keyof StatePopulation) => {
        if (sortColumn === column) {
            return sortDirection === 'asc' ? ' ↑' : ' ↓';
        }
        return '';
    };

    return (
        <table className="table table-striped table-bordered mt-4" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th onClick={() => handleSort('state')}>State {renderSortIndicator('state')}</th>
                    <th onClick={() => handleSort('year')}>Year {renderSortIndicator('year')}</th>
                    <th onClick={() => handleSort('population')}>Population {renderSortIndicator('population')}</th>
                    <th onClick={() => handleSort('slugState')}>Slug State {renderSortIndicator('slugState')}</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr key={item.idState}>
                        <td>{item.state}</td>
                        <td>{item.year}</td>
                        <td>{item.population.toLocaleString()}</td>
                        <td>{item.slugState}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

import React, { useState } from 'react';

export interface PopulationData {
    Year: string;
    Population: number;
    Nation: string;
}

interface UnitedStatesYearlyPopulationProps {
    data: PopulationData[];
}

export const UnitedStatesYearlyPopulation: React.FC<UnitedStatesYearlyPopulationProps> = ({ data }) => {
    const [sortedData, setSortedData] = useState<PopulationData[]>(data);
    const [sortColumn, setSortColumn] = useState<keyof PopulationData>('Year');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (column: keyof PopulationData) => {
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

    const renderSortIndicator = (column: keyof PopulationData) => {
        if (sortColumn === column) {
            return sortDirection === 'asc' ? ' ↑' : ' ↓';
        }
        return '';
    };

    return (
        <table className="table table-striped table-bordered mt-4" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th onClick={() => handleSort('Year')}>Year {renderSortIndicator('Year')}</th>
                    <th onClick={() => handleSort('Population')}>Population {renderSortIndicator('Population')}</th>
                    <th onClick={() => handleSort('Nation')}>Nation {renderSortIndicator('Nation')}</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr key={item.Year}>
                        <td>{item.Year}</td>
                        <td>{item.Population.toLocaleString()}</td>
                        <td>{item.Nation}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

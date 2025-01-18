import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../../common/components/buttons';
import { getUnitedStatesPopulations } from '../api/getUnitedStatesPopulations';
import { PopulationData, UnitedStatesYearlyPopulation } from '../components/UnitedStatesYearlyPopulation';
import { getStatePopulations, StatePopulation } from '../api/getStatePopulations';
import { StatesPopulation } from '../components/StatesPopulation';

export const ApiExample: React.FC = () => {
    const [data, setData] = useState<PopulationData[] | StatePopulation[] | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchUnitedStatesPopulationData = async () => {
        setLoading(true);
        const us = await getUnitedStatesPopulations();
        setData(us);
        setLoading(false);
    };

    const fetchStateData = async () => {
        setLoading(true);
        const states = await getStatePopulations();
        setData(states);
        setLoading(false);
    };

    const dataDisplay = () => {
        if (data && (data as PopulationData[]).length > 0 && 'Year' in (data as PopulationData[])[0]) {
            return <UnitedStatesYearlyPopulation data={data as PopulationData[]} />;
        } else if (data && (data as StatePopulation[]).length > 0 && 'state' in (data as StatePopulation[])[0]) {
            return <StatesPopulation data={data as StatePopulation[]} />;
        }
        return null;
    };

    return (
        <div>
            <h1>API Example</h1>
            <PrimaryButton
                onClick={fetchUnitedStatesPopulationData}
                disabled={loading}
                label="Fetch United States Population Data"
            />
            <SecondaryButton onClick={fetchStateData} disabled={loading} label="Fetch States Population Data" />
            {dataDisplay()}
        </div>
    );
};

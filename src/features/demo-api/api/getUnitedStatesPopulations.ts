import { enhancedFetch } from '../../../common/utilities/enhancedFetch';
import { getBackendUrl } from '../../../common/utilities/getBackendUrl';

interface PopulationData {
    Year: string;
    Population: number;
    Nation: string;
}

export const getUnitedStatesPopulations = async (): Promise<PopulationData[]> => {
    const baseUrl = getBackendUrl();
    const apiUrl = `${baseUrl}/data?drilldowns=Nation&measures=Population`;

    try {
        const response = await enhancedFetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const result = await response.json();
        return result.data;
    } catch (err) {
        throw new Error(`Data Retrieval Error: ${(err as Error).message}`);
    }
};
